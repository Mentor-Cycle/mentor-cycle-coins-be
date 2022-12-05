import { VolunteerSchema } from '../volunteer.model';
import { VolunteerRepository } from '../volunteer.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../../config/configuration';
import { connections } from 'mongoose';

describe('VolunteerService', () => {
  let repository: VolunteerRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          load: [configuration],
          isGlobal: true,
        }),
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) => ({
            uri: configService.get('database.testUri'),
          }),
          inject: [ConfigService],
        }),
        MongooseModule.forFeature([
          {
            name: 'Volunteer',
            schema: VolunteerSchema,
          },
        ]),
      ],
      providers: [VolunteerRepository],
    }).compile();

    repository = module.get<VolunteerRepository>(VolunteerRepository);
  });

  afterEach((done) => {
    connections[1].close(() => {
      done();
    });
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
