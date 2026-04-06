import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../config/database/prisma.service';
import * as bcrypt from 'bcrypt';
import type { User } from 'src/config/database';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const users = await this.prisma.$queryRaw<User[]>`
      SELECT * FROM "User" WHERE email = ${email}
    `;

    if (users.length === 0) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password, ...result } = user;
    return result;
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.validateUser(email, password);
    return this.jwtService.sign(user, { secret: process.env.JWT_SECRET });
  }
}
