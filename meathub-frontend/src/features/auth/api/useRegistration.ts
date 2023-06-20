import { axios } from '@/lib/axios.ts';

import { AuthResponse, REGISTER_URL, RegisterRequest } from '@/features/auth';
import { delay, selectBasedOnMock } from '@/lib/helpers';
import { useMutation } from '@tanstack/react-query';

const registerWithEmailAndPassword = async (
  params: RegisterRequest
): Promise<AuthResponse> => {
  const payload = JSON.stringify(params);
  const response = await axios.post(REGISTER_URL, payload);
  return response.data;
};

const mockRegisterWithEmailAndPassword = async (
  params: RegisterRequest
): Promise<AuthResponse> => {
  params;
  console.log(params);
  await delay(2);
  return {
    authToken: 'register_auth_token',
    refreshToken: 'register_auth_refresh_token',
    companyId: '1',
    role: 'company',
  };
};

export const useRegistration = () => {
  return useMutation({
    mutationFn: (params: RegisterRequest) =>
      selectBasedOnMock(
        mockRegisterWithEmailAndPassword(params),
        registerWithEmailAndPassword(params)
      ),
  });
};
