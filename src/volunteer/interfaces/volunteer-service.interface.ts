import { CreateVolunteerDto } from '../dto/create-volunteer.dto';
import { PartialVolunteerDto } from '../dto/update-volunteer.dto';
import { Volunteer } from '../entities/volunteer.entity';

export const VOLUNTEER_SERVICE = 'VOLUNTEER_SERVICE';

export interface VolunteerServiceInterface {
  create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer>;
  findAll(filter: PartialVolunteerDto): Promise<Volunteer[]>;
  findOne(id: string): Promise<Volunteer>;
  update(
    id: string,
    PartialVolunteerDto: PartialVolunteerDto,
  ): Promise<Volunteer>;
  remove(id: string): Promise<Volunteer>;
}
