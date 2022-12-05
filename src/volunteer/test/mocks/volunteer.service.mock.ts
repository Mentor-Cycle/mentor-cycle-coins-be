import { Injectable } from '@nestjs/common';
import { CreateVolunteerDto } from 'src/volunteer/dto/create-volunteer.dto';
import { PartialVolunteerDto } from 'src/volunteer/dto/update-volunteer.dto';
import { Volunteer } from '../../entities/volunteer.entity';
import { VolunteerServiceInterface } from 'src/volunteer/interfaces/volunteer-service.interface';

export class VolunteerServiceMock implements VolunteerServiceInterface {
  private volunteers: Volunteer[] = [];
  create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer> {
    const volunteer = new Volunteer(
      createVolunteerDto.name,
      createVolunteerDto.email,
    );

    this.volunteers.push();
    return Promise.resolve(volunteer);
  }

  async findAll(filters: PartialVolunteerDto): Promise<Volunteer[]> {
    return Promise.resolve(this.volunteers);
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
