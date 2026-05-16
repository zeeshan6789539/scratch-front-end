export interface IApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T | null;
}

export interface IPaginatedResponse<T> {
  success: boolean;
  message: string;
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface IApiError {
  success: false;
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}
