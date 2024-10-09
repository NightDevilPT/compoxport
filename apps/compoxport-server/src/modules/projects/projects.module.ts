import { Module } from '@nestjs/common';
import { ProjectsCommandHandlers } from './commands';
import { ProjectsQueryHandlers } from './queries';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  imports: [],
  controllers: [ProjectsController],
  providers: [ProjectsService, ...ProjectsCommandHandlers, ...ProjectsQueryHandlers],
})
export class ProjectsModule {}