import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { TeamDto } from './teams.dto';
import { Team } from './teams.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  getAllRoles() {
    return this.teamRepository.find();
  }
  addNewRole(team: TeamDto) {
    console.log(team, 'team');

    const createteam = this.teamRepository.create(team);
    return this.teamRepository.save(createteam);
  }
}
