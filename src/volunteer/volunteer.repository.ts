import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVolunteerDto } from 'src/volunteer/dto/create-volunteer.dto';
import { Volunteer } from 'src/volunteer/entities/volunteer.entity';
import { VolunteerRepositoryInterface } from 'src/volunteer/interfaces/volunteer-repository.interface';

@Injectable()
export class VolunteerRepository implements VolunteerRepositoryInterface {
  constructor(
    @InjectModel('Volunteer') private readonly userModel: Model<Volunteer>,
  ) {}

  async create(volunteer: CreateVolunteerDto): Promise<Volunteer> {
    return new this.userModel(volunteer).save();
  }
}
