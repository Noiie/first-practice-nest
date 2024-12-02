import { Injectable } from '@nestjs/common';

@Injectable()
export class SourcesService {
  getAll(): string {
    return 'all sources';
  }
}
