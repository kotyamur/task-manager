export interface IRegisterLoginUserData {
  email: string;
  password: string;
}

export interface IResponseUserData {
  user: {};
  access_token: string;
}

export interface IErrorData {
  message: [] | string;
  error: string;
  statusCode: number;
}
