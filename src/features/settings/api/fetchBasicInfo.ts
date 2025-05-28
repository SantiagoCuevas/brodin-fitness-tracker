import { supabaseClient } from '../../../app/supabaseClient';

export async function getUserBasicInfo() {
  const {
    data: { user },
    error: userError,
  } = await supabaseClient.auth.getUser();

  if (userError || !user) {
    console.error('No user found', userError);
    return null;
  }

  const { data: basicInfo, error } = await supabaseClient
    .from('basic_info')
    .select('*')
    .eq('user_id', user.id)
    .single();

  if (error) {
    console.error('Error fetching basic info', error);
    return null;
  }

  return basicInfo;
}
