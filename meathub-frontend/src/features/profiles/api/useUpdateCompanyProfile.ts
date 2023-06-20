import { axios } from '@/lib/axios.ts';
import { PROFILE_INFORMATION_URL } from '@/features/profiles';
import { useMutation } from '@tanstack/react-query';
import { delay, selectBasedOnMock } from '@/lib/helpers';

type UpdateCompanyProfile = {
  name: string;
  street: string;
  city: string;
  zip: string;
  country: string;
};

const updateCompanyProfileInfo = async (
  params: UpdateCompanyProfile
): Promise<void> => {
  const payload = JSON.stringify(params);
  return await axios.post(PROFILE_INFORMATION_URL, payload);
};

const mockUpdateCompanyProfileInfo = async (params: UpdateCompanyProfile) => {
  params;
  await delay(3);
  return Promise.resolve();
};

export const useUpdateCompanyProfile = () => {
  return useMutation({
    mutationFn: (params: UpdateCompanyProfile) =>
      selectBasedOnMock(
        mockUpdateCompanyProfileInfo(params),
        updateCompanyProfileInfo(params)
      ),
  });
};
