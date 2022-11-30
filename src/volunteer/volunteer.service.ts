import { Inject, Injectable } from '@nestjs/common';
import { CreateVolunteerDto } from 'src/volunteer/dto/create-volunteer.dto';
import { UpdateVolunteerDto } from 'src/volunteer/dto/update-volunteer.dto';
import { Volunteer } from 'src/volunteer/entities/volunteer.entity';
import { VOLUNTEER_REPOSITORY } from 'src/volunteer/interfaces/volunteer-repository.interface';
import { VolunteerServiceInterface } from './interfaces/volunteer-service.interface';
import { VolunteerRepository } from './volunteer.repository';

@Injectable()
export class VolunteerService implements VolunteerServiceInterface {
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
