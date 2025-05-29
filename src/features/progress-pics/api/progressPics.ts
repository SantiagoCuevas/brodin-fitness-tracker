import { supabaseClient } from '../../../app/supabaseClient';

interface TempPhysiqueSnapshot {
  id: string;
  created_at: string;
  note: string | null;
  image_url: string;
  view_url: string;
}

export async function getProgressSnapshotsWithUrls(): Promise<
  TempPhysiqueSnapshot[]
> {
  const {
    data: { user },
    error: userError,
  } = await supabaseClient.auth.getUser();

  if (userError || !user) throw new Error('User not authenticated');

  const { data: snapshots, error } = await supabaseClient
    .from('physique_snapshots')
    .select('id, created_at, image_url, note')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) throw error;

  const results: TempPhysiqueSnapshot[] = snapshots.map((snap) => {
    const { data } = supabaseClient.storage
      .from('progress_pics')
      .getPublicUrl(snap.image_url);

    return {
      ...snap,
      view_url: data.publicUrl,
    };
  });

  return results;
}
