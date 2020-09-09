import axios from "axios";

export interface Request {
  email: string;
  password: string;
}

export interface Response {
  token: string;
  message: string;
}

export const URL = "/auth";

export const login = (data: Request) =>
  axios.post<Response>(`${URL}/login`, data);

export const create = (data: Request) =>
  axios.post<Response>(`${URL}/create`, data);

export const facebook = (data: {
  id: string;
  accessToken: string;
  signedRequest: string;
}) => axios.post<Response>(`${URL}/facebook`, data);

export const google = (data: { idToken: string }) =>
  axios.post<Response>(`${URL}/google`, data);
