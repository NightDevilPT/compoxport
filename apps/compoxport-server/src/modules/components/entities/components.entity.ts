// component.schema.ts
import { Document, Types } from 'mongoose';
import { User } from 'src/modules/users/entities/users.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ComponentDocument = Component & Document;

@Schema({ timestamps: true }) // Automatically adds createdAt and updatedAt
export class Component {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop({ required: true })
  type: string;

  @Prop({ type: Map, of: String })
  styles: Record<string, string>;

  @Prop({ type: Map, of: String })
  events: Record<string, string>;

  @Prop({ type: Map, of: String })
  attributes: Record<string, string>;

  // Reference to the User who created the component
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  createdBy: User;

  // Reference to the User who last updated the component
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  updatedBy: User;

  // An array of references to other Component documents (self-referencing)
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Component' }] })
  children: Component[];
}

export const ComponentSchema = SchemaFactory.createForClass(Component);
