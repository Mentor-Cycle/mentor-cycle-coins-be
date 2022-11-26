import { Injectable } from '@nestjs/common';
import { CreateVolunteerDto } from 'src/volunteer/dto/create-volunteer.dto';
import { UpdateVolunteerDto } from 'src/volunteer/dto/update-volunteer.dto';
import { Volunteer } from 'src/volunteer/entities/volunteer.entity';
import { VolunteerService } from 'src/volunteer/services/volunteer.service';

@Injectable()
export class VolunteerServiceImplmenetation implements VolunteerService {
  create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer> {
    const volunteer = new Volunteer(
      createVolunteerDto.name,
      createVolunteerDto.email,
    );
    return Promise.resolve(volunteer);
  }

  findAll(): Promise<Volunteer[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<Volunteer> {
    throw new Error('Method not implemented.');
  }
  update(
    id: string,
    updateVolunteerDto: UpdateVolunteerDto,
  ): Promise<Volunteer> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<Volunteer> {
    throw new Error('Method not implemented.');
  }
}
