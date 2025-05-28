export interface BasicInfo {
  id: number; // bigint in Postgres
  created_at: string; // ISO timestamp
  user_id: string; // UUID
  name: string | null;
  display_name: string | null;
  dob: string | null; // 'YYYY-MM-DD' format from Supabase
  height_feet: number | null;
  height_inches: number | null;
}
