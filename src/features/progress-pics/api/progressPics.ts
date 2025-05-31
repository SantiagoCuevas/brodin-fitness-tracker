import { supabaseClient } from '../../../app/supabaseClient';

interface TempPhysiqueSnapshot {
  id: string;
  created_at: string;
  note: string | null;
  image_url: string[];
}

export async function getSnapshotsWithPics(): Promise<TempPhysiqueSnapshot[]> {
  const {
    data: { user },
    error: userError,
  } = await supabaseClient.auth.getUser();

  if (userError || !user) throw new Error('User not authenticated');

  const { data: snapshots, error } = await supabaseClient
    .from('physique_snapshots')
    .select('id, created_at, image_url, note')
    .eq('user_id', user.id)
    .filter('image_url', 'neq', '{}') // Only get rows with non-empty image arrays
    .order('created_at', { ascending: false });

  if (error) throw error;

  return snapshots.map((snap) => {
    return {
      id: snap.id,
      created_at: snap.created_at,
      note: snap.note,
      image_url: snap.image_url,
    };
  });
}
