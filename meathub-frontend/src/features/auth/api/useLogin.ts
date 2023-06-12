import { axios } from '@/lib/axios.ts';

import { LOGIN_URL } from '@/features/auth';

type AuthResponse = {
  authToken: string;
  refreshToken: string;
};

export const useLogin = () => {
  const loginWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<AuthResponse> => {
    const payload = JSON.stringify({ email, password });
    const response = await axios.post(LOGIN_URL, payload);
    return response.data as AuthResponse;
  };

  return { loginWithEmailAndPassword };
};
