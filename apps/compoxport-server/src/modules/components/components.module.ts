import { Module } from '@nestjs/common';
import { ComponentsCommandHandlers } from './commands';
import { ComponentsQueryHandlers } from './queries';
import { ComponentsController } from './components.controller';
import { ComponentsService } from './components.service';

@Module({
  imports: [],
  controllers: [ComponentsController],
  providers: [ComponentsService, ...ComponentsCommandHandlers, ...ComponentsQueryHandlers],
})
export class ComponentsModule {}