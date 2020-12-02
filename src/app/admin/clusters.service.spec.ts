/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClustersService } from './clusters.service';

describe('Service: Clusters', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClustersService]
    });
  });

  it('should ...', inject([ClustersService], (service: ClustersService) => {
    expect(service).toBeTruthy();
  }));
});
