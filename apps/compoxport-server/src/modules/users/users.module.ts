import { Module } from '@nestjs/common';
import { UsersCommandHandlers } from './commands';
import { UsersQueryHandlers } from './queries';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { HashService } from 'src/services/hash-module/hash-service/hash-service.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [HashService, JwtModule],
  controllers: [UsersController],
  providers: [UsersService, ...UsersCommandHandlers, ...UsersQueryHandlers],
})
export class UsersModule {}