import { axios } from '@/lib/axios.ts';

import { AuthResponse, REGISTER_URL } from '@/features/auth';
import { delay } from '@/lib/helpers';

export const useRegistration = () => {
  const registerWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<AuthResponse> => {
    const payload = JSON.stringify({ email, password });
    const response = await axios.post(REGISTER_URL, payload);
    return response.data;
  };

  const mockRegisterWithEmailAndPassword = async (
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
  return { registerWithEmailAndPassword, mockRegisterWithEmailAndPassword };
};
