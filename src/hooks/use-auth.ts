import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiService } from "@/lib/api-client";
import { ENDPOINTS, QUERY_KEYS, LOCAL_STORAGE_KEYS } from "@/lib/constants";
import {
  IUser,
  ILoginCredentials,
  IRegisterCredentials,
  IAuthResponse,
} from "@/types";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const userQuery = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: () => apiService.get<IUser>(ENDPOINTS.USER.me),
    retry: false,
    staleTime: Infinity,
  });

  const loginMutation = useMutation({
    mutationFn: (credentials: ILoginCredentials) =>
      apiService.post<IAuthResponse>(ENDPOINTS.AUTH.login, credentials),
    onSuccess: (data) => {
      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, data.token);
      queryClient.setQueryData([QUERY_KEYS.USER], data.user);
    },
  });

  const registerMutation = useMutation({
    mutationFn: (credentials: IRegisterCredentials) =>
      apiService.post<IAuthResponse>(ENDPOINTS.AUTH.register, credentials),
    onSuccess: (data) => {
      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, data.token);
      queryClient.setQueryData([QUERY_KEYS.USER], data.user);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => apiService.post(ENDPOINTS.AUTH.logout),
    onSuccess: () => {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
      queryClient.setQueryData([QUERY_KEYS.USER], null);
      queryClient.clear();
    },
  });

  return {
    user: userQuery.data,
    isLoading: userQuery.isLoading,
    isError: userQuery.isError,
    login: loginMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    register: registerMutation.mutate,
    isRegistering: registerMutation.isPending,
    logout: logoutMutation.mutate,
    isLoggingOut: logoutMutation.isPending,
  };
};
