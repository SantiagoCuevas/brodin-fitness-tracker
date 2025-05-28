import { supabaseClient } from '../../../app/supabaseClient';
import { BasicInfoUpdate } from '../types/BasicInfo';

export async function fetchBasicInfoForCurrentUser() {
  const {
    data: { user },
    error: userError,
  } = await supabaseClient.auth.getUser();

  if (userError || !user) {
    throw new Error('User not found or auth error');
  }

  const { data, error } = await supabaseClient
    .from('basic_info')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function upsertBasicInfoForCurrentUser(payload: BasicInfoUpdate) {
  const {
    data: { user },
    error: userError,
  } = await supabaseClient.auth.getUser();

  if (userError || !user) throw new Error('User not found');

  const { error } = await supabaseClient.from('basic_info').upsert(
    {
      user_id: user.id,
      ...payload,
    },
    { onConflict: 'user_id' }
  );

  if (error) throw error;

  return true;
}
