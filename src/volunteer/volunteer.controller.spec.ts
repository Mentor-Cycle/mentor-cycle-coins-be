import { Test, TestingModule } from '@nestjs/testing';
import { VOLUNTEER_SERVICE } from './interfaces/volunteer-service.interface';
import { VolunteerController } from './volunteer.controller';

describe('VolunteerController', () => {
  let controller: VolunteerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolunteerController],
      providers: [
        {
          provide: VOLUNTEER_SERVICE,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<VolunteerController>(VolunteerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
