import { axios } from '@/lib/axios.ts';

type AuthResponse = {
  token: string
}

export const useLogin = () => {

  const loginWithEmailAndPassword = async (email: string, password: string): Promise<AuthResponse> => {
    const payload = JSON.stringify({ email, password });
    const response = await axios.post('/auth/login', payload);
    return response.data as AuthResponse;
  };

  return { loginWithEmailAndPassword };
};