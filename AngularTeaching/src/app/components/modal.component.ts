import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'modal',
    template: '<ng-content></ng-content>',
    styleUrls: ['../styles/css/modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

    @Input() id: string;
    private element;

    constructor(private modalService: ModalService, private elementRef: ElementRef) {
        this.element = this.elementRef.nativeElement;
    }

    ngOnInit(): void {
        let modal = this;

        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }

        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.querySelector('body').appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', function (e: any) {
            if (!e.target.closest('.modal-body').length) {
                modal.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.parentNode.removeChild(this.element);
    }

    // open modal
    open(): void {
        this.element.style.display="block";
        document.querySelector('body').classList.add('modal-open');
    }

    // close modal
    close(): void {
        this.element.style.display="none";
        document.querySelector('body').classList.remove('modal-open');
    }

}
