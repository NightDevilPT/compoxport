import { Injectable } from '@nestjs/common';
import { CreateProjectsDto } from './dto/create-projects.dto';
import { UpdateProjectsDto } from './dto/update-projects.dto';

@Injectable()
export class ProjectsService {
  create(createProjectsDto: CreateProjectsDto) {
    return 'This action adds a new projects';
  }

  findAll() {
    return `This action returns all projectss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projects`;
  }

  update(id: number, updateProjectsDto: UpdateProjectsDto) {
    return `This action updates a #${id} projects`;
  }

  remove(id: number) {
    return `This action removes a #${id} projects`;
  }
}