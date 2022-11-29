import { Inject, Injectable } from '@nestjs/common';
import { CreateVolunteerDto } from 'src/volunteer/dto/create-volunteer.dto';
import { UpdateVolunteerDto } from 'src/volunteer/dto/update-volunteer.dto';
import { Volunteer } from 'src/volunteer/entities/volunteer.entity';
import {
  VOLUNTEER_REPOSITORY,
  VolunteerRepository,
} from 'src/volunteer/repository/volunteer.repository';
import { VolunteerService } from 'src/volunteer/services/volunteer.service';

@Injectable()
export class VolunteerServiceImplmenetation implements VolunteerService {
  constructor(
    @Inject(VOLUNTEER_REPOSITORY)
    private readonly volunteerRepository: VolunteerRepository,
  ) {}
  create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer> {
    return this.volunteerRepository.create(createVolunteerDto);
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
