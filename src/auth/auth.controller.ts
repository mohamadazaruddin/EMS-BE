import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    console.log(body, 'body');
    return this.authService.login(body);
  }
  @Post('logout')
  logout(@Param() id: number) {
    // Your logout logic here
    return this.authService.logout(id);
  }
}
