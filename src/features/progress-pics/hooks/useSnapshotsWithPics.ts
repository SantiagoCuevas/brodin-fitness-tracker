import useSWR from 'swr';
import { getSnapshotsWithPics } from '../api/progressPics';

export function useSnapshotsWithPics() {
  const { data, error, isLoading, mutate } = useSWR(
    'progressSnapshots',
    getSnapshotsWithPics
  );

  return {
    snapshots: data,
    isLoading,
    isError: !!error,
    error,
    refresh: mutate,
  };
}
