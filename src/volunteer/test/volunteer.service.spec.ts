import { VolunteerRepository } from './../volunteer.repository';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Volunteer } from '../entities/volunteer.entity';
import { VOLUNTEER_REPOSITORY } from '../interfaces/volunteer-repository.interface';
import { VolunteerService } from '../volunteer.service';
import { VolunteerRepositoryMock } from './mocks/volunter.repository.mock';

describe('VolunteerService', () => {
  let service: VolunteerService;
  let repository: VolunteerRepository;
  let volunteer: Volunteer;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VolunteerService,
        {
          provide: VOLUNTEER_REPOSITORY,
          useClass: VolunteerRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<VolunteerService>(VolunteerService);
    repository = module.get<VolunteerRepository>(VOLUNTEER_REPOSITORY);
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
    expect(service).toBeDefined();
  });

  it('should throw not found exception if no volunteers', async () => {
    await expect(service.findAll({})).rejects.toThrow(NotFoundException);
  });

  it('should create a volunteer', async () => {
    await service.create(volunteer);
    const volunteers = await service.findAll({});
    expect(volunteers).toHaveLength(1);
  });

  it('should throw a NotFoundException if no volunteer by id is found', async () => {
    await expect(service.findOne('1')).rejects.toThrow(NotFoundException);
  });

  it('should return one volunteer by id', async () => {
    const volunteerCreated = await service.create(volunteer);
    const volunteerFound = await service.findOne(volunteerCreated.id);
    expect(volunteerFound).toEqual(volunteerCreated);
  });

  it('should return list of volunteers', async () => {
    const volunteer = new Volunteer('name', 'email');
    jest.spyOn(repository, 'create').mockResolvedValue(volunteer);
    await service.create(volunteer);
    expect(repository.create).toBeCalled();
  });

  it('should throw a NotFoundException if no volunteer by id is found when try to update', async () => {
    await expect(service.update('1', {})).rejects.toThrow(NotFoundException);
  });

  it('should update volunteer', async () => {
    const volunteerCreated = await service.create(volunteer);
    const volunteerUpdated = await service.update(volunteerCreated.id, {
      name: 'new name',
    });
    expect(volunteerUpdated.name).toEqual('new name');
  });
  it('should throw a NotFoundException if no volunteer by id is found when try to remove', async () => {
    await expect(service.remove('123')).rejects.toThrow(NotFoundException);
  });

  it('should update volunteer', async () => {
    const volunteerCreated = await service.create(volunteer);
    await service.remove(volunteerCreated.id);
    const volunteerDeleted = await service.findOne(volunteerCreated.id);
    expect(volunteerDeleted.active).toBe(false);
  });
});
