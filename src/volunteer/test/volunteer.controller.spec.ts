import { Volunteer } from '../..//volunteer/entities/volunteer.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { VOLUNTEER_SERVICE } from '../interfaces/volunteer-service.interface';
import { VolunteerController } from '../volunteer.controller';
import { VolunteerServiceMock } from './mocks/volunteer.service.mock';

describe('VolunteerController', () => {
  let controller: VolunteerController;
  let volunteer: Volunteer;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolunteerController],
      providers: [
        {
          provide: VOLUNTEER_SERVICE,
          useClass: VolunteerServiceMock,
        },
      ],
    }).compile();

    controller = module.get<VolunteerController>(VolunteerController);
    volunteer = new Volunteer(
      'name',
      'email',
      'role',
      'team',
      'photo',
      0,
      true,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a volunteer if correct data is provided', async () => {
    const response = await controller.create(volunteer);
    expect(response.name).toBe(volunteer.name);
    expect(response.email).toBe(volunteer.email);
    expect(response.role).toBe(volunteer.role);
    expect(response.team).toBe(volunteer.team);
    expect(response.photo).toBe(volunteer.photo);
    expect(response.mentorCoins).toBe(volunteer.mentorCoins);
    expect(response.active).toBe(volunteer.active);
    expect(response.id).toBeDefined();
  });

  it('should find all volunteers', async () => {
    await controller.create(volunteer);
    await controller.create(volunteer);
    const volunteers = await controller.findAll({});
    expect(volunteers).toHaveLength(2);
  });

  it('should find one volunteer', async () => {
    const volunteerCreated = await controller.create(volunteer);
    const volunteerFound = await controller.findOne(volunteerCreated.id);
    expect(volunteerFound).toEqual(volunteerCreated);
  });

  it('should update a volunteer', async () => {
    const volunteerCreated = await controller.create(volunteer);
    const volunteerUpdated = await controller.update(volunteerCreated.id, {
      name: 'new name',
    });
    expect(volunteerUpdated.name).toBe('new name');
  });

  it('should delete a volunteer', async () => {
    const volunteerCreated = await controller.create(volunteer);
    await controller.remove(volunteerCreated.id);
    const volunteers = await controller.findAll({});
    expect(volunteers).toHaveLength(0);
  });
});
