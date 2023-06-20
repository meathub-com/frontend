import { axios } from '@/lib/axios.ts';

import { AuthResponse, LOGIN_URL, LoginRequest } from '@/features/auth';
import { delay, selectBasedOnMock } from '@/lib/helpers';
import { useMutation } from '@tanstack/react-query';

const loginWithEmailAndPassword = async (
  params: LoginRequest
): Promise<AuthResponse> => {
  const payload = JSON.stringify(params);
  const response = await axios.post(LOGIN_URL, payload);
  return response.data;
};

const mockLoginWithEmailAndPassword = async (
  params: LoginRequest
): Promise<AuthResponse> => {
  params;
  console.log(params);
  await delay(2);
  return {
    authToken: 'login_auth_token',
    refreshToken: 'login_auth_refresh_token',
    companyId: '1',
    role: 'company',
  };
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (params: LoginRequest) =>
      selectBasedOnMock(
        mockLoginWithEmailAndPassword(params),
        loginWithEmailAndPassword(params)
      ),
  });
};
