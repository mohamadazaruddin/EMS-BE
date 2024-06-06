import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/entity/employees.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local-strategy';
import { JwtStrategy } from './strategies/jwt-strategy';
@Module({
  imports: [
    JwtModule.register({
      secret: `${process.env.JWT_SECRET_OR_KEY}`,
      signOptions: { expiresIn: '3600s' },
    }),
    TypeOrmModule.forFeature([Employee]),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
