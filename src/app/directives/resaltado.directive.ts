import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) {
    console.log("Directiva llamada");
    // el.nativeElement.style.backgroundColor = "red";
   }

   @Input("appResaltado") color:string;

   @HostListener('mouseenter') museEntro(){
    this.resaltar(this.color || 'yellow');
    // this.el.nativeElement.style.backgroundColor = "red";

   }
   @HostListener('mouseleave') museSalio(){
     this.resaltar(null);

   }

   private resaltar( colorN:string){
    this.el.nativeElement.style.backgroundColor = colorN;
   }


}
