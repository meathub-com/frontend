import { axios } from '@/lib/axios.ts';

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
    const response = await axios.post('/login', payload);
    return response.data as AuthResponse;
  };

  return { loginWithEmailAndPassword };
};
