import { Module } from '@nestjs/common';
import { SchedualsController } from './scheduals.controller';
import { SchedualsService } from './scheduals.service';

@Module({
  controllers: [SchedualsController],
  providers: [SchedualsService]
})
export class SchedualsModule {}
