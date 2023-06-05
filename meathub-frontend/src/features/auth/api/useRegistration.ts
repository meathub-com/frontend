import { axios } from '@/lib/axios.ts';

type RegistrationResponse = {
  authToken: string;
  refreshToken: string;
}

export const useRegistration = () => {
  const registerWithEmailAndPassword = async (email: string, password: string): Promise<RegistrationResponse> => {
    const payload = JSON.stringify({ email, password });
    const response = await axios.post('http://localhost:8080/auth/register', payload);
    return response.data ;
  };

  return { registerWithEmailAndPassword };
};
