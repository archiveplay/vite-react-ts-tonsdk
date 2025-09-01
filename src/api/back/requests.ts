import backendApi from './index';
import { ProfileResponse } from './types';

export const login = async (initData: string) => {
  console.log('/login req', initData)
  const res = await backendApi.post('/auth/login', { initData });
  console.log('/login res', res);
  const token = res.data.access_token;
  if (token) {
    localStorage.setItem('jwt', token);
  }
  return res.data;
};

export const getProfile = async () => {
  const res = await backendApi.get<ProfileResponse>('/user/profile');
  return res.data;
};

