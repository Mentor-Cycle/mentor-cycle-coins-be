import { CreateVolunteerDto } from '../dto/create-volunteer.dto';
import { Volunteer } from '../entities/volunteer.entity';
import { PartialVolunteerDto } from '../dto/update-volunteer.dto';

export const VOLUNTEER_REPOSITORY = 'VOLUNTEER_REPOSITORY';

export interface VolunteerRepositoryInterface {
  create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer>;
  findAll(filters: PartialVolunteerDto): Promise<Volunteer[]>;
  findOne(id: string): Promise<Volunteer>;
  update(id: string, volunteer: PartialVolunteerDto): Promise<Volunteer>;
  remove(id: string): Promise<Volunteer>;
}
