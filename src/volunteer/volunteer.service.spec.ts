import { Test, TestingModule } from '@nestjs/testing';
import { VOLUNTEER_SERVICE } from './interfaces/volunteer-service.interface';
import { VolunteerService } from './volunteer.service';

describe('VolunteerService', () => {
  let service: VolunteerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: VOLUNTEER_SERVICE,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<VolunteerService>(VOLUNTEER_SERVICE);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
