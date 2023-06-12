import { axios } from '@/lib/axios.ts';

import { REGISTER_URL } from '@/features/auth';

type RegistrationResponse = {
  authToken: string;
  refreshToken: string;
};

export const useRegistration = () => {
  const registerWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<RegistrationResponse> => {
    const payload = JSON.stringify({ email, password });
    const response = await axios.post(REGISTER_URL, payload);
    return response.data;
  };

  return { registerWithEmailAndPassword };
};
