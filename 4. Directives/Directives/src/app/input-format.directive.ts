import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { }

  // @HostListener('focus') onFocus() {
  //   console.log('Input field focused');
  // }

  @HostListener('blur') onBlur() {
    // console.log('Input field blurred');
    let value: string = this.el.nativeElement.value;
    if(this.format === 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLowerCase();
  }

}
