export interface IVolunteer {
  id: string;
  name: string;
  email: string;
  role?: string;
  team?: string;
  photo?: string;
  mentorCoins?: number;
  active?: boolean;
  updated_at: Date;
  created_at: Date;
}
