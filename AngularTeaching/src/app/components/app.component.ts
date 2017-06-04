import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/css/app.component.css'],
  providers: [ModalService]
})
export class AppComponent {
    private bodyText:string = "Model 1";

    constructor(private modalService: ModalService){}

    openModal(id: string){
        this.modalService.open(id);
    }

    closeModal(id: string){
        this.modalService.close(id);
    }
}
