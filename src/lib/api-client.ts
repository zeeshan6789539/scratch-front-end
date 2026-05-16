import axios from "axios";
import { API_CONFIG, LOCAL_STORAGE_KEYS } from "@/lib";
import { IApiResponse, IPaginatedResponse } from "@/types";
import { toast } from "sonner";

export const apiClient = axios.create({
  baseURL: `${API_CONFIG.BASE_URL}${API_CONFIG.PREFIX}`,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (typeof window !== "undefined") {
      const message =
        error.response?.data?.message || error.message || "An error occurred";

      if (error.response?.status === 401) {
        toast.error("Unauthorized", {
          description: "Your session has expired. Please log in again.",
        });
      } else {
        toast.error(message);
      }
    }

    return Promise.reject(error);
  }
);

// Generic API Service
export const apiService = {
  get: async <T>(url: string, params?: object): Promise<T> => {
    const response = await apiClient.get<IApiResponse<T>>(url, { params });
    return response.data.data as T;
  },

  getPaginated: async <T>(
    url: string,
    params?: object
  ): Promise<IPaginatedResponse<T>> => {
    const response = await apiClient.get<IPaginatedResponse<T>>(url, {
      params,
    });
    return response.data;
  },

  post: async <T>(url: string, data?: unknown): Promise<T> => {
    const response = await apiClient.post<IApiResponse<T>>(url, data);
    return response.data.data as T;
  },

  put: async <T>(url: string, data?: unknown): Promise<T> => {
    const response = await apiClient.put<IApiResponse<T>>(url, data);
    return response.data.data as T;
  },

  patch: async <T>(url: string, data?: unknown): Promise<T> => {
    const response = await apiClient.patch<IApiResponse<T>>(url, data);
    return response.data.data as T;
  },

  delete: async <T>(url: string): Promise<T> => {
    const response = await apiClient.delete<IApiResponse<T>>(url);
    return response.data.data as T;
  },
};
