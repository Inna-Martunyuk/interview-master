import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlifht]',
})
export class HighlifhtDirective {
  @Input() highlightColor: string = 'yellow';
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
