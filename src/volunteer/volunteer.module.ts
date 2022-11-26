import { VOLUNTEER_SERVICE } from './services/volunteer.service';
import { Module } from '@nestjs/common';
import { VolunteerController } from './controller/volunteer.controller';
import { VolunteerServiceImplmenetation } from './infra/services/volunter-implementation.service';

@Module({
  controllers: [VolunteerController],
  providers: [
    {
      provide: VOLUNTEER_SERVICE,
      useClass: VolunteerServiceImplmenetation,
    },
  ],
})
export class VolunteerModule {}
