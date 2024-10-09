import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { CreateComponentsDto } from './dto/create-components.dto';
import { UpdateComponentsDto } from './dto/update-components.dto';

@Controller('components')
export class ComponentsController {
  constructor(private readonly componentsService: ComponentsService) {}

  @Post()
  create(@Body() createComponentsDto: CreateComponentsDto) {
    return this.componentsService.create(createComponentsDto);
  }

  @Get()
  findAll() {
    return this.componentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComponentsDto: UpdateComponentsDto) {
    return this.componentsService.update(+id, updateComponentsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componentsService.remove(+id);
  }
}