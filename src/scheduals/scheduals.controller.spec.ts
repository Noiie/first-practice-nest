import { Test, TestingModule } from '@nestjs/testing';
import { SchedualsController } from './scheduals.controller';

describe('SchedualsController', () => {
  let controller: SchedualsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchedualsController],
    }).compile();

    controller = module.get<SchedualsController>(SchedualsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
