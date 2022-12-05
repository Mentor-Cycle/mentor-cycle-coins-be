import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Query,
} from '@nestjs/common';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { PartialVolunteerDto } from './dto/update-volunteer.dto';
import {
  VolunteerServiceInterface,
  VOLUNTEER_SERVICE,
} from './interfaces/volunteer-service.interface';

@Controller('volunteer')
export class VolunteerController {
  constructor(
    @Inject(VOLUNTEER_SERVICE)
    private readonly volunteerService: VolunteerServiceInterface,
  ) {}

  @Post()
  create(@Body() createVolunteerDto: CreateVolunteerDto) {
    return this.volunteerService.create(createVolunteerDto);
  }

  @Get()
  findAll(@Query() filters: PartialVolunteerDto) {
    return this.volunteerService.findAll(filters);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.volunteerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() PartialVolunteerDto: PartialVolunteerDto,
  ) {
    return this.volunteerService.update(id, PartialVolunteerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.volunteerService.remove(id);
  }
}
