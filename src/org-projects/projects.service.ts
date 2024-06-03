import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Project } from './projects.entity';
import { ProjectDto } from './projects.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  getAllRoles() {
    return this.projectRepository.find();
  }
  addNewRole(project: ProjectDto) {
    console.log(project, 'team');

    const createproject = this.projectRepository.create(project);
    return this.projectRepository.save(createproject);
  }
}
