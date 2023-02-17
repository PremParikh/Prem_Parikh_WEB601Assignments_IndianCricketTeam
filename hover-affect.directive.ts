import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() hoverProperty = 'textDecoration';

  @HostBinding('class.hover-effect') isHovered = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
    if (this.isFirstOrLastCard()) {
      this.element.style.border = '2px solid red';
    } else {
      this.element.style.border = '2px solid black';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
    this.element.style.border = this.originalBorder;
  }

  private originalBorder: string;

  constructor(private element: HTMLElement) {
    this.originalBorder = this.element.style.border;
  }

  private isFirstOrLastCard() {
    // @ts-ignore
    const cards = this.element.parentElement.querySelectorAll('.content-card');
    return this.element === cards[0] || this.element === cards[cards.length - 1];
  }

  @HostBinding('style.fontWeight') get fontWeight() {
    return this.isHovered && this.hoverProperty === 'fontWeight' ? 'bold' : 'normal';
  }

  @HostBinding('style.textDecoration') get textDecoration() {
    return this.isHovered && this.hoverProperty === 'textDecoration' ? 'underline' : 'none';
  }
}
