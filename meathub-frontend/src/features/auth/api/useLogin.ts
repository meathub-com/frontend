import { axios } from '@/lib/axios.ts';

import { AuthResponse, LOGIN_URL } from '@/features/auth';
import { delay } from '@/lib/helpers';

export const useLogin = () => {
  const loginWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<AuthResponse> => {
    const payload = JSON.stringify({ email, password });
    const response = await axios.post(LOGIN_URL, payload);
    return response.data as AuthResponse;
  };

  const mockLoginWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<AuthResponse> => {
    email;
    password;
    await delay(2);
    return {
      authToken: 'abcd',
      refreshToken: 'abcdrefresh',
      companyId: '4',
      role: 'company',
    };
  };

  return { loginWithEmailAndPassword, mockLoginWithEmailAndPassword };
};
