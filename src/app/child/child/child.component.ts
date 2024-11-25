import { Component, Host, input, Optional, Self, SkipSelf } from '@angular/core';
import { AnimalService } from '../../animal.service';
import { FlowerService } from '../../flower.service';

@Component( {
  selector     : 'app-child',
  standalone   : true,
  imports      : [],
  templateUrl  : './child.component.html',
  styleUrl     : './child.component.scss',
  providers    : [
    {
      provide: AnimalService, useValue: { emoji: '🦊' }
    }
  ],
  viewProviders: [
    {
      provide: AnimalService, useValue: { emoji: '🐻' }
    }
  ]
} )
export class ChildComponent {
  type = input();

  constructor(
      public normalAnimal?: AnimalService,
      @Optional() @Host() public hostAnimal?: AnimalService,
      @Optional() @Host() @SkipSelf() public hostSkipSelfAnimal?: AnimalService,
      @Optional() @Self() public selfAnimal?: AnimalService,
  ) {}
}
