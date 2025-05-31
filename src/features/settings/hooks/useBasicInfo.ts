import useSWR from 'swr';
import { fetchBasicInfoForCurrentUser } from '../api/basicInfo';
import { BasicInfo } from '../types/BasicInfo';

export function useBasicInfo() {
  const { data, error, isLoading, mutate } = useSWR<BasicInfo>(
    'basic-info',
    fetchBasicInfoForCurrentUser
  );

  return {
    basicInfo: data,
    isLoading,
    error,
    refresh: mutate,
  };
}
