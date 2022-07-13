import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit {
  private hmtlElement : ElementRef<HTMLElement>;
  @Input()color:string = 'red';
  @Input()mensaje:string  = 'Este campo es Obligatorio!';
  @Input()clases:string = 'form-text';


  constructor( private el: ElementRef<HTMLElement>) {
   this.hmtlElement  = el
  }
  ngOnInit(): void {
    this.setColor()
    this.setMensaje()
    this.addClase()
  }

  setColor():void{
    this.hmtlElement.nativeElement.style.color = this.color
  }
  setMensaje():void{
    this.hmtlElement.nativeElement.innerHTML = this.mensaje
  }

  addClase(){
    this.hmtlElement.nativeElement.classList.add(this.clases)
  }
  

}
