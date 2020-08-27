import { Injectable } from '@nestjs/common';
import { Space } from './schemas/space.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSpaceDto } from './dto/create-space.dto';


@Injectable()
export class SpaceService {
  constructor(@InjectModel(Space.name) private spaceModel: Model<Space>) {}

  async create(createSpaceDto: CreateSpaceDto): Promise<Space> {
    const createdSpace = new this.spaceModel(createSpaceDto);
    return createdSpace.save();
  }

  async findAll(): Promise<Space[]> {
    return this.spaceModel.find().exec();
  }

}
