import { PartialType } from '@nestjs/mapped-types';
import { CreateVolunteerDto } from './create-volunteer.dto';

export class PartialVolunteerDto extends PartialType(CreateVolunteerDto) {}
