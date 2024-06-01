import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './roles.entity';
import { Repository } from 'typeorm';
import { RoleDto } from './roles.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  getAllRoles() {
    return this.roleRepository.find();
  }
  addNewRole(role: RoleDto) {
    const createrole = this.roleRepository.create(role);
    return this.roleRepository.save(createrole);
  }
}
