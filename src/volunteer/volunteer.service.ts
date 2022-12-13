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
  async create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer> {
    return this.volunteerRepository.create(createVolunteerDto);
  }

  async findAll(filters: PartialVolunteerDto): Promise<Volunteer[]> {
    const volunteers = await this.volunteerRepository.findAll(filters);
    if (!volunteers.length) {
      throw new NotFoundException('No volunteers found');
    }
    return volunteers;
  }
  async findOne(id: string): Promise<Volunteer> {
    const volunteerExists = await this.volunteerRepository.findOne(id);
    if (!volunteerExists) {
      throw new NotFoundException('Volunteer not found');
    }
    return volunteerExists;
  }
  async update(
    id: string,
    PartialVolunteerDto: PartialVolunteerDto,
  ): Promise<Volunteer> {
    const volunteerExists = await this.volunteerRepository.findOne(id);
    if (!volunteerExists) {
      throw new NotFoundException('Volunteer not found');
    }
    return this.volunteerRepository.update(id, PartialVolunteerDto);
  }
  async remove(id: string): Promise<Volunteer> {
    const volunterExists = await this.volunteerRepository.findOne(id);
    if (!volunterExists) {
      throw new NotFoundException('Volunteer not found');
    }
    return this.volunteerRepository.remove(id);
  }
}
