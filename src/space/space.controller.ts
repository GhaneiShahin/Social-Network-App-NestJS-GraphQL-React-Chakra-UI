import { Controller, Get, Post, Body } from '@nestjs/common';
import { SpaceService } from './space.service';
import { CreateSpaceDto } from './dto/create-space.dto';

@Controller('spaces')
export class SpaceController {
  constructor(private spaceService: SpaceService) {}

  @Get()
  findAll(): any {
    return this.spaceService.findAll();
  }

  @Post()
  async create(@Body() newSpace: CreateSpaceDto): Promise<any> {
    try {
      const space = await this.spaceService.create(newSpace);
      return space;
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  @Get(':id')
  findOne(): any {
    return {
      itemSuccess: true,
    };
  }
}
