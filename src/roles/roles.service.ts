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

  async getAllRoles() {
    const rolesList = await this.roleRepository.find();
    let roles = rolesList.filter((role) => !role.roleName.includes('ceo'));
    return roles;
  }
  addNewRole(role: RoleDto) {
    const createrole = this.roleRepository.create(role);
    return this.roleRepository.save(createrole);
  }
  async getRole(teamId: number) {
    return this.roleRepository.findBy({ id: teamId });
  }
}
