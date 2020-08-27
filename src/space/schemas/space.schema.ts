import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Space extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true, enum: ['public', 'private', 'secret'] })
  privacy: string;

  @Prop({ required: true, enum: ['public', 'invitation', 'approval'] })
  registration: 'public' | 'invitation' | 'approval';
}

export const SpaceSchema = SchemaFactory.createForClass(Space);
