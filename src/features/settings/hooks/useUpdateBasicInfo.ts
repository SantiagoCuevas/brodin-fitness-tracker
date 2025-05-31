import { upsertBasicInfoForCurrentUser } from '../api/basicInfo';
import { BasicInfoUpdate } from '../types/BasicInfo';
import { useBasicInfo } from './useBasicInfo';

export function useUpdateBasicInfo() {
  const { refresh } = useBasicInfo();

  async function updateBasicInfo(payload: BasicInfoUpdate) {
    await upsertBasicInfoForCurrentUser(payload);
    await refresh(); // refresh cache after update
  }

  return { updateBasicInfo };
}
