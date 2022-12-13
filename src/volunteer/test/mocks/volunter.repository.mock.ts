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
    return Promise.resolve(
      this.volunteers.filter((volunteer) => volunteer.active),
    );
  }

  async create(volunteer: CreateVolunteerDto): Promise<Volunteer> {
    const volunterEntity = new Volunteer(
      volunteer.name,
      volunteer.email,
      volunteer.role,
      volunteer.team,
      volunteer.photo,
      volunteer.mentorCoins,
      volunteer.active,
    );
    this.volunteers.push(volunterEntity);
    return Promise.resolve(volunterEntity);
  }
  async findOne(id: string): Promise<Volunteer> {
    return Promise.resolve(
      this.volunteers.find((volunteer) => volunteer.id === id),
    );
  }
  async update(id: string, volunteer: PartialVolunteerDto): Promise<Volunteer> {
    const volunteerIndex = this.volunteers.findIndex(
      (volunteer) => volunteer.id === id,
    );
    this.volunteers[volunteerIndex] = {
      ...this.volunteers[volunteerIndex],
      ...volunteer,
    };
    return Promise.resolve(this.volunteers[volunteerIndex]);
  }
  async remove(id: string): Promise<Volunteer> {
    const volunteerIndex = this.volunteers.findIndex(
      (volunteer) => volunteer.id === id,
    );
    this.volunteers[volunteerIndex] = {
      ...this.volunteers[volunteerIndex],
      active: false,
    };

    return Promise.resolve(this.volunteers[volunteerIndex]);
  }
}
