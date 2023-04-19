// simulated-server.ts

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from './content';

export class SimulatedServer implements InMemoryDbService {
  createDb() {
    const contents: Content[] = [
      { id: 0, title: 'Sample Content 1', body: 'This is some sample content.' },
      { id: 1, title: 'Sample Content 2', body: 'This is some more sample content.' },
      { id: 2, title: 'Sample Content 3', body: 'Even more sample content here.' },
    ];

    return { contents };
  }
}
