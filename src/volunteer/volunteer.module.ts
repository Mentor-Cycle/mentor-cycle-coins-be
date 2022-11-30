import { VOLUNTEER_SERVICE } from './interfaces/volunteer-service.interface';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VolunteerSchema } from './volunteer.model';
import { VOLUNTEER_REPOSITORY } from './interfaces/volunteer-repository.interface';
import { VolunteerController } from './volunteer.controller';
import { VolunteerService } from './volunteer.service';
import { VolunteerRepository } from './volunteer.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Volunteer',
        schema: VolunteerSchema,
      },
    ]),
  ],
  controllers: [VolunteerController],
  providers: [
    {
      provide: VOLUNTEER_SERVICE,
      useClass: VolunteerService,
    },
    {
      provide: VOLUNTEER_REPOSITORY,
      useClass: VolunteerRepository,
    },
  ],
})
export class VolunteerModule {}
