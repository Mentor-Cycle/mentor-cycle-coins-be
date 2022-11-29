import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVolunteerDto } from 'src/volunteer/dto/create-volunteer.dto';
import { Volunteer } from 'src/volunteer/entities/volunteer.entity';
import { VolunteerRepository } from 'src/volunteer/repository/volunteer.repository';

@Injectable()
export class VolunteerRepositoryImplementation implements VolunteerRepository {
  constructor(
    @InjectModel('Volunteer') private readonly userModel: Model<Volunteer>,
  ) {}

  async create(volunteer: CreateVolunteerDto): Promise<Volunteer> {
    return new this.userModel(volunteer).save();
  }
}
