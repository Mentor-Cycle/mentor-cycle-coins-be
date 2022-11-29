import { VolunteerRepositoryImplementation } from './infra/repository/volunteer-implementation.repository';
import { VOLUNTEER_REPOSITORY } from './repository/volunteer.repository';
import { VOLUNTEER_SERVICE } from './services/volunteer.service';
import { Module } from '@nestjs/common';
import { VolunteerController } from './controller/volunteer.controller';
import { VolunteerServiceImplmenetation } from './infra/services/volunteer-implementation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VolunteerSchema } from './infra/entities/mongo/volunteer.model';

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
      useClass: VolunteerServiceImplmenetation,
    },
    {
      provide: VOLUNTEER_REPOSITORY,
      useClass: VolunteerRepositoryImplementation,
    },
  ],
})
export class VolunteerModule {}
