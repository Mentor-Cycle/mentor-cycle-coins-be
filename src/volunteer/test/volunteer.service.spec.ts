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
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw not found exception if no volunteers', async () => {
    expect(service.findAll({})).rejects.toThrow(NotFoundException);
  });

  it('should create a volunteer', async () => {
    const volunteer = new Volunteer('name', 'email');
    await service.create(volunteer);
    const volunteers = await service.findAll({});
    expect(volunteers).toHaveLength(1);
  });

  it('should return list of volunteers', async () => {
    const volunteer = new Volunteer('name', 'email');
    jest.spyOn(repository, 'create').mockResolvedValue(volunteer);
    await service.create(volunteer);
    expect(repository.create).toBeCalled();
  });
});
