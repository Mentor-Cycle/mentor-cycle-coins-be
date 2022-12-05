import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateVolunteerDto } from 'src/volunteer/dto/create-volunteer.dto';
import { PartialVolunteerDto } from 'src/volunteer/dto/update-volunteer.dto';
import { Volunteer } from 'src/volunteer/entities/volunteer.entity';
import { VOLUNTEER_REPOSITORY } from './interfaces/volunteer-repository.interface';
import { VolunteerServiceInterface } from './interfaces/volunteer-service.interface';

@Injectable()
export class VolunteerService implements VolunteerServiceInterface {
  constructor(
    @Inject(VOLUNTEER_REPOSITORY)
    private readonly volunteerRepository: VolunteerServiceInterface,
  ) {}
  create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer> {
    return this.volunteerRepository.create(createVolunteerDto);
  }

  async findAll(filters: PartialVolunteerDto): Promise<Volunteer[]> {
    const volunteers = await this.volunteerRepository.findAll(filters);
    if (!volunteers.length) {
      throw new NotFoundException('No volunteers found');
    }
    return volunteers;
  }
  findOne(id: string): Promise<Volunteer> {
    throw new Error('Method not implemented.');
  }
  update(
    id: string,
    PartialVolunteerDto: PartialVolunteerDto,
  ): Promise<Volunteer> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<Volunteer> {
    throw new Error('Method not implemented.');
  }
}
