import { Component } from '@angular/core';
import { ModalPopUpService } from '../../services/modal-pop-up.service';

@Component({
  selector: 'app-modal-pop-up',
  templateUrl: './modal-pop-up.component.html',
  styleUrls: ['./modal-pop-up.component.css']
})
export class ModalPopUpComponent {

  constructor(private ngbModalService: ModalPopUpService)
  {}

  closeModal(title: string)
  {
    this.ngbModalService.closeModalByTitle(title);
  }

  closeAllModal()
  {
    this.ngbModalService.closeAllModals();
  }
}
