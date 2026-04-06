import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Res,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res) {
    const token = await this.authService.login(
      loginDto.email,
      loginDto.password,
    );
    res.cookie('jwt', token, { httpOnly: true, sameSite: 'lax', path: '/' });
    res.send({ ok: true, data: { message: 'Logged in successfully' } });
  }

  @Get('check')
  @UseGuards(JwtAuthGuard)
  async check(@Req() req) {
    return { ok: true, data: req.user };
  }

  @Get('admin/data')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async getAdminData() {
    return { ok: true, data: { testAdmin: true } };
  }

  @Post('logout')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  async logout(@Res() res) {
    res.clearCookie('jwt');
    res.send({ ok: true, data: { message: 'Logged out successfully' } });
  }
}
