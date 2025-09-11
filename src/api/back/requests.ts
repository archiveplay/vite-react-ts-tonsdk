import backendApi from "./index";
import { ProfileResponse, TopUpOption } from "./types";

export const login = async (initData: string) => {
  const res = await backendApi.post("/auth/login", { initData });
  const token = res.data.access_token;
  if (token) {
    localStorage.setItem("jwt", token);
  }
  return res.data;
};

export const getProfile = async () => {
  const res = await backendApi.get<ProfileResponse>("/user/profile");
  return res.data;
};

export const topUpBalance = async (opt: TopUpOption) => {
  try {
    const res = await backendApi.post("/user-payment/top-up", opt);
    return res.data;
  } catch (err) {
    console.error("Ошибка при создании invoice", err);
  }
};

export const getInvoiceStatus = async (id: number) => {
  const res = await backendApi.get(`/user-payment/${id}/status`);
  return res.data;
};
