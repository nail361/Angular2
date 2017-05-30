import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[underlined]'
})
export class UnderlinedDirective {

    constructor(private elementRef: ElementRef){}

    @HostListener("mouseenter")
    onMouseEnter() {
        this.setUnderline("underline");
    }

    @HostListener("mouseleave")
    onMouseLeave() {
        this.setUnderline("none");
    }

    private setUnderline(val:string) {
        this.elementRef.nativeElement.style.textDecoration =  val;
    }

}
