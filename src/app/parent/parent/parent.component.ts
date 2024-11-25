import { Component, Host, Optional, Self, SkipSelf } from '@angular/core';
import { ChildComponent } from '../../child/child/child.component';
import { AnimalService } from '../../animal.service';
import { ZooDirective } from '../../zoo.directive';

@Component( {
  selector     : 'app-parent',
  standalone   : true,
  imports      : [
    ChildComponent,
    ZooDirective
  ],
  templateUrl  : './parent.component.html',
  styleUrl     : './parent.component.scss',
  providers    : [
    {
      provide: AnimalService, useValue: { emoji: '🐶' }
    }
  ],
  viewProviders: [
    {
      provide: AnimalService, useValue: { emoji: '11111111111' }
    }
  ]
} )
export class ParentComponent {
  constructor(
      public normalAnimal?: AnimalService,
      @Optional() @Host() public hostAnimal?: AnimalService,
      @Optional() @Host() @SkipSelf() public hostSkipSelfAnimal?: AnimalService,
      @Self() public selfAnimal?: AnimalService,
  ) { }
}
