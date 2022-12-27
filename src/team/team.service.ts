import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel('Team')
    private readonly teamModel: Model<Team>,
  ) {}
  create(createTeamDto: CreateTeamDto) {
    return new this.teamModel(createTeamDto).save();
  }

  findAll() {
    return this.teamModel.find().exec();
  }

  findOne(id: number) {
    return this.teamModel.findById(id).exec();
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return this.teamModel.findByIdAndUpdate(id, updateTeamDto, { new: true });
  }

  remove(id: number) {
    return this.teamModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true },
    );
  }
}
