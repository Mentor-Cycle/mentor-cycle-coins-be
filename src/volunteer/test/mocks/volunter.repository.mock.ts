import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVolunteerDto } from 'src/volunteer/dto/create-volunteer.dto';
import { PartialVolunteerDto } from 'src/volunteer/dto/update-volunteer.dto';
import { Volunteer } from '../../entities/volunteer.entity';
import { VolunteerRepositoryInterface } from 'src/volunteer/interfaces/volunteer-repository.interface';

@Injectable()
export class VolunteerRepositoryMock implements VolunteerRepositoryInterface {
  private volunteers: Volunteer[] = [];
  async findAll(filters: PartialVolunteerDto): Promise<Volunteer[]> {
    return Promise.resolve(this.volunteers);
  }

  async create(volunteer: CreateVolunteerDto): Promise<Volunteer> {
    const volunterEntity = new Volunteer(volunteer.name, volunteer.email);
    this.volunteers.push(volunterEntity);
    return Promise.resolve(volunterEntity);
  }
}
