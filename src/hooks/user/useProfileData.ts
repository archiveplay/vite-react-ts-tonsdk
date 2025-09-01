import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/api/back';
import { ProfileResponse } from '@/api/back/types';

export const useProfileData = () => {
  return useQuery<ProfileResponse>({
    queryKey: ['profile'],
    queryFn: getProfile,
    retry: false,
    staleTime: 60_000,
    enabled: true,
  });
};

