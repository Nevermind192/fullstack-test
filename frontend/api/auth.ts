import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const getMe = async () => {
  const result = await api.get("/auth/check");
  if (result.data?.ok) return result.data.data;
  return null;
};

export const postLogout = async () => {
  const result = await api.post("/auth/logout");

  return result.data?.ok || false;
};

export const postLogin = async (values: {
  email: string;
  password: string;
}) => {
  const result = await api.post("/auth/login", values);

  return result.data?.ok || false;
};

export const getAdmin = async () => {
  const result = await api.get("/auth/admin/data");
  if (result.data?.ok) return result.data.data;
  return null;
};
