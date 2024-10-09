import { Injectable } from '@nestjs/common';
import { CreateComponentsDto } from './dto/create-components.dto';
import { UpdateComponentsDto } from './dto/update-components.dto';

@Injectable()
export class ComponentsService {
  create(createComponentsDto: CreateComponentsDto) {
    return 'This action adds a new components';
  }

  findAll() {
    return `This action returns all componentss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} components`;
  }

  update(id: number, updateComponentsDto: UpdateComponentsDto) {
    return `This action updates a #${id} components`;
  }

  remove(id: number) {
    return `This action removes a #${id} components`;
  }
}