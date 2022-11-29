import { CreateVolunteerDto } from '../dto/create-volunteer.dto';
import { Volunteer } from '../entities/volunteer.entity';

export const VOLUNTEER_REPOSITORY = 'VOLUNTEER_REPOSITORY';

export interface VolunteerRepository {
  create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer>;
}
