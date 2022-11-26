import { randomUUID } from 'crypto';
export class Volunteer {
  id: string;
  name: string;
  email: string;
  role?: string;
  team?: string;
  photo?: string;
  mentorCoins?: number;
  active?: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    name: string,
    email: string,
    role?: string,
    team?: string,
    photo?: string,
    mentorCoins?: number,
    active?: boolean,
  ) {
    this.id = randomUUID();
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.name = name;
    this.email = email;
    this.role = role;
    this.team = team;
    this.photo = photo;
    this.mentorCoins = mentorCoins;
    this.active = active;
  }
}
