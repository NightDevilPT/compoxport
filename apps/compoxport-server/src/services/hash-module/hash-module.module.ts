import { Module } from '@nestjs/common';
import { HashService } from './hash-service/hash-service.service';

@Module({
  providers: [HashService],
})
export class HashModuleModule {}
