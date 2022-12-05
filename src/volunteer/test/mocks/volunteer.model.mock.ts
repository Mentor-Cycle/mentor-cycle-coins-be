import { Model } from 'mongoose';
import { Volunteer } from '../../../volunteer/entities/volunteer.entity';
export class VolunteerModelMock {
  private volunteers: Volunteer[] = [];
  async create(volunteer: Volunteer): Promise<Volunteer> {
    const volunterEntity = new Volunteer(volunteer.name, volunteer.email);
    this.volunteers.push(volunterEntity);
    return Promise.resolve(volunterEntity);
  }
  async findAll(filters: Partial<Volunteer>): Promise<Volunteer[]> {
    return Promise.resolve(this.volunteers);
  }
  async findOne(id: string): Promise<Volunteer> {
    return Promise.resolve(
      this.volunteers.find((volunteer) => volunteer.id === id),
    );
  }
  async update(id: string, volunteer: Partial<Volunteer>): Promise<Volunteer> {
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
