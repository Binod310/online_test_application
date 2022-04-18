import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() iscorrect : Boolean=false;
  constructor(private el: ElementRef , private render:Renderer2) { }
  @HostListener('click')answer()
  {
    if(this.iscorrect)
    {
      this.render.setStyle(this.el.nativeElement,'background','green');
      this.render.setStyle(this.el.nativeElement,'color','white');
      this.render.setStyle(this.el.nativeElement,'border','2px solid grey');
    }
    else{
      this.render.setStyle(this.el.nativeElement,'background','red');
      this.render.setStyle(this.el.nativeElement,'color','white');
      this.render.setStyle(this.el.nativeElement,'border','2px solid grey');
    }
  }

}
