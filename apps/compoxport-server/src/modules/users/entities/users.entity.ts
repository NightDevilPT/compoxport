// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Project } from 'src/modules/projects/entities/projects.entity';

export type UserDocument = User & Document;

@Schema({ timestamps: true }) // Automatically adds createdAt and updatedAt
export class User {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isVerified: boolean;

  @Prop({ default: null })
  token: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Project' }] })
  projects: Project[];
}

export const UserSchema = SchemaFactory.createForClass(User);
