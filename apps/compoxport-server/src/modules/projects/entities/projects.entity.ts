// project.schema.ts
import { Document, Types } from 'mongoose';
import { User } from 'src/modules/users/entities/users.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Component } from 'src/modules/components/entities/components.entity';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true }) // Automatically adds createdAt and updatedAt
export class Project {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  createdBy: User;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  updatedBy: User;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Component' }] })
  components: Component[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
