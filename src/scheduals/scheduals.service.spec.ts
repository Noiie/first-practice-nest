import { Test, TestingModule } from '@nestjs/testing';
import { SchedualsService } from './scheduals.service';

describe('SchedualsService', () => {
  let service: SchedualsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchedualsService],
    }).compile();

    service = module.get<SchedualsService>(SchedualsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
