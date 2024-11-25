import { Directive, ElementRef, Host, OnInit, Optional, Renderer2, Self, SkipSelf } from '@angular/core';
import { AnimalService } from './animal.service';

@Directive( {
  selector  : '[appZoo]',
  standalone: true
} )
export class ZooDirective implements OnInit {

  constructor(
      public normalAnimal: AnimalService,
      @Optional() @Host() public hostAnimal: AnimalService,
      @Optional() @Host() @SkipSelf() public hostSkipSelfAnimal: AnimalService,
      @Optional() @SkipSelf() public skipSelfAnimal: AnimalService,
      @Optional() @Self() public selfAnimal: AnimalService,
      public hosEl: ElementRef,
      public renderer: Renderer2,
  ) { }

  ngOnInit() {
    let el  = this.renderer.createElement( 'div' );
    let el1 = this.renderer.createElement( 'div' );
    let el2 = this.renderer.createElement( 'div' );
    let el3 = this.renderer.createElement( 'div' );
    let el4 = this.renderer.createElement( 'div' );

    el.innerHTML  = `------- dir normalAnimal ${ this.normalAnimal?.emoji }`;
    el1.innerHTML = `------- dir hostAnimal ${ this.hostAnimal?.emoji }`;
    el2.innerHTML = `------- dir hostSkipSelfAnimal ${ this.hostSkipSelfAnimal?.emoji }`;
    el3.innerHTML = `------- dir skipSelfAnimal ${ this.skipSelfAnimal?.emoji }`;
    el4.innerHTML = `------- dir selfAnimal ${ this.selfAnimal?.emoji }`;

    this.renderer.appendChild( this.hosEl.nativeElement, el );
    this.renderer.appendChild( this.hosEl.nativeElement, el1 );
    this.renderer.appendChild( this.hosEl.nativeElement, el2 );
    this.renderer.appendChild( this.hosEl.nativeElement, el3 );
    this.renderer.appendChild( this.hosEl.nativeElement, el4 );
  }

}
