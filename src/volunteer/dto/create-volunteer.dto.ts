export class CreateVolunteerDto {
  name: string;
  email: string;
  role?: string;
  team?: string;
  photo?: string;
  mentorCoins?: number;
  active?: boolean;
}
