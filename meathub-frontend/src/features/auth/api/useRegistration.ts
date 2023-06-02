import { axios } from '@/lib/axios.ts';

type RegistrationResponse = {
  authToken: string;
  refreshToken: string;
}

export const useRegistration = () => {
  const registerWithEmailAndPassword = async (email: string, password: string): Promise<any> => {
    const payload = JSON.stringify({ email, password });
    const response = await axios.post('/auth/auth/register', payload);
    return response.data ;
  };

  return { registerWithEmailAndPassword };
};