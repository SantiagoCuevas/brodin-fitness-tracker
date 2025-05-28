import { supabaseClient } from '../../../app/supabaseClient';

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
