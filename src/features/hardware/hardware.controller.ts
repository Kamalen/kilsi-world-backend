import { Controller, Get, HttpCode, Param, UseGuards } from '@nestjs/common';
import { HardwareService } from './hardware.service';
import { AuthGuard } from '../auth/auth.guard';
import { HardwareId } from '../../data/hardware';

@Controller('hardware')
export class HardwareController {
  constructor(private readonly hardwareService: HardwareService) {}

  @UseGuards(AuthGuard)
  @Get('wake/:id')
  @HttpCode(201)
  wakeUp(@Param('id') id: HardwareId) {
    return this.hardwareService.wakeUp(id);
  }
}
