import { Host, Injectable, Optional, Self, SkipSelf } from '@angular/core';
import { AnimalService } from './animal.service';

@Injectable( {
  providedIn: 'root'
} )
export class FlowerService {

  constructor(
      public normalAnimal?: AnimalService,
      @Optional() @Host() public hostAnimal?: AnimalService,
      @Optional() @Host() @SkipSelf() public hostSkipSelfAnimal?: AnimalService,
      @Optional() @SkipSelf() public skipSelfAnimal?: AnimalService,
      @Optional() @Self() public selfAnimal?: AnimalService,
  ) {
    console.log( 'normalAnimal', normalAnimal?.emoji );
    console.log( 'hostAnimal', hostAnimal?.emoji );
    console.log( 'hostSkipSelfAnimal', hostSkipSelfAnimal?.emoji );
    console.log( 'skipSelfAnimal', skipSelfAnimal?.emoji );
    console.log( 'selfAnimal', selfAnimal?.emoji );
  }
}
