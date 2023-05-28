import { axios } from '@/lib/axios.ts';

type RegistrationResponse = {
  token: string;
}

export const useRegistration = () => {
  const registerWithEmailAndPassword = async (email: string, password: string): Promise<RegistrationResponse> => {
    const payload = JSON.stringify({ email, password });
    const response = await axios.post('register', payload);
    return response.data as RegistrationResponse;
  };

  return { registerWithEmailAndPassword };
};