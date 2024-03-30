import { TestBed } from '@angular/core/testing';

import { ModalPopUpService } from './modal-pop-up.service';

describe('ModalPopUpService', () => {
  let service: ModalPopUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalPopUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
