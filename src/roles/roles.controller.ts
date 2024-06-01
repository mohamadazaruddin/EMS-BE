import { Body, Controller, Get, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RoleDto } from './roles.dto';

@Controller('role')
export class RoleController {
  constructor(private rolesService: RolesService) {}
  @Get()
  getRoles() {
    return this.rolesService.getAllRoles();
  }

  @Post()
  addRole(@Body() role: RoleDto) {
    return this.rolesService.addNewRole(role);
  }
}
