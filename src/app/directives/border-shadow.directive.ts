import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appBorderShadow]',
  standalone: true
})
export class BorderShadowDirective {

  @Input() backlColor: string='black'
  @Input('appBorderShadow')  defaultColor:string='red'

  constructor(private e:ElementRef) 
  {
    e.nativeElement.style.border = '1px solid #ccc';
    e.nativeElement.style.boxShadow = '2px 2px 5px #888';     
  }
  /*ngOnChanges() {
    this.e.nativeElement.style.backgroundColor = this.defaultColor;

  }*/
  ngAfterViewInit() {
    this.e.nativeElement.style.backgroundColor = this.defaultColor;

  }

  @HostListener('mouseover') over()
  {
    this.e.nativeElement.style.border = '1px solid #ccc';
    this.e.nativeElement.style.boxShadow = '4px 4px 4px #333'; 
    this.e.nativeElement.style.backgroundColor = this.backlColor;
  }

  @HostListener('mouseout') out()
  {
    this. e.nativeElement.style.border = '1px solid #ccc';
    this.e.nativeElement.style.boxShadow = '2px 2px 5px #888'; 
    this.e.nativeElement.style.backgroundColor = this.defaultColor;

  }

}
