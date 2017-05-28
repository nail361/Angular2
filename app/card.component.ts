import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "card",
    template: `
    <input [(ngModel)] = text (ngModelChange) = "send($event)">
    `,
    styles: []
})
export class Card{
    text:string;
    @Output() onSubmit = new EventEmitter<string>();
    send(model:string) {
        this.onSubmit.emit(model);
    }
}
