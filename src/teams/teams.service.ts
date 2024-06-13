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

  async getAllRoles() {
    const teamList = await this.teamRepository.find();
    let teams = teamList.filter(
      (team) => !team.teamName.includes('management'),
    );
    return teams;
  }
  addNewRole(team: TeamDto) {
    const createteam = this.teamRepository.create(team);
    return this.teamRepository.save(createteam);
  }

  async getTeam(teamId: number) {
    return this.teamRepository.findBy({ id: teamId });
  }
}
