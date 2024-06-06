import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from 'src/employees/entity/employees.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private readonly jwtservice: JwtService,
  ) {}

  async validateUser(credential: User) {
    const user = await this.employeeRepository.findOneBy({
      email: credential.email,
    });

    if (user && user.password === credential.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      email: user.email,
    };
    const { password, ...result } = user;
    const { email } = result;
    return {
      email,
      accessToken: this.jwtservice.sign(payload),
    };
  }
}
