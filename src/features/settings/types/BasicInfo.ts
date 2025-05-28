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

export interface BasicInfoUpdate {
  name?: string;
  display_name?: string;
  dob?: string; // YYYY-MM-DD
  height_feet?: number;
  height_inches?: number;
}
