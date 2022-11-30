import { CreateVolunteerDto } from '../dto/create-volunteer.dto';
import { UpdateVolunteerDto } from '../dto/update-volunteer.dto';
import { Volunteer } from '../entities/volunteer.entity';

export const VOLUNTEER_SERVICE = 'VOLUNTEER_SERVICE';

export interface VolunteerServiceInterface {
  create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer>;
  findAll(): Promise<Volunteer[]>;
  findOne(id: string): Promise<Volunteer>;
  update(
    id: string,
    updateVolunteerDto: UpdateVolunteerDto,
  ): Promise<Volunteer>;
  remove(id: string): Promise<Volunteer>;
}
