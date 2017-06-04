import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

    private modals: any[] = [];

    add(modal: any) {
      // add modal to array of active modals
      this.modals.push(modal);
    }

    remove(id: string) {
      // remove modal from array of active modals
      for (let i = 0; i < this.modals.length; i++) {
          if (this.modals[i].id == id){
              this.modals.splice(i,1);
              return;
          }
      }
    }

    open(id: string) {
      // open modal specified by id
      this.modals.find(modal => modal.id == id).open();
    }

    close(id: string) {
      // close modal specified by id
      this.modals.find(modal => modal.id == id).close();
    }

}
