import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalPopUpService {

  modalRefsMap: { [key: string]: NgbModalRef };
  
  constructor(private ngbModalService: NgbModal) {
    this.modalRefsMap = {};
    }

  openModal(title: string, content: any)
  {
    const modalRef = this.ngbModalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.modalRefsMap[title] = modalRef; // Store the reference with the given title  
  }

  closeModalByTitle(title: string) {
    const modalRef = this.modalRefsMap[title];
    if (modalRef) {
      modalRef.close(); // Close modal with the specified title
      delete this.modalRefsMap[title]; // Remove the modal reference from the map
    }
  }

  closeAllModals() {
    for (const title in this.modalRefsMap) {
      if (this.modalRefsMap.hasOwnProperty(title)) {
        const modalRef = this.modalRefsMap[title];
        modalRef.close(); // Close modal with the current title
        delete this.modalRefsMap[title]; // Remove the modal reference from the map
      }
    }
  }
}
