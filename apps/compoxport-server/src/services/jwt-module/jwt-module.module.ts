import { Module } from '@nestjs/common';
import { JwtAuthService } from './jwt-service/jwt-service.service';

@Module({
  providers: [JwtAuthService],
})
export class JwtModuleModule {}
