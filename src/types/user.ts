export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  roleId: string;
  companyId: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ILoginCredentials {
  email: string;
  password?: string;
}

export interface IRegisterCredentials extends ILoginCredentials {
  name: string;
  phone: string;
  roleId: string;
  companyId: string;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}
