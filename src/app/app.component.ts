import { Component, Host, Optional, Self, SkipSelf } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent/parent.component';
import { ChildComponent } from './child/child/child.component';
import { AnimalService } from './animal.service';
import { ZooDirective } from './zoo.directive';
import { FlowerService } from './flower.service';

@Component( {
  selector     : 'app-root',
  standalone   : true,
  imports      : [ RouterOutlet, ParentComponent, ChildComponent, ZooDirective ],
  templateUrl  : './app.component.html',
  styleUrl     : './app.component.scss',
  providers    : [
    {
      provide: AnimalService, useValue: { emoji: '🐬' }
    }
  ],
  viewProviders: [
    {
      provide: AnimalService, useValue: { emoji: '🐠' }
    }
  ]
} )
export class AppComponent {
  title = 'di';

  constructor(
      public normalAnimal?: AnimalService,
      @Optional() @Host() public hostAnimal?: AnimalService,
      @Optional() @Host() @SkipSelf() public hostSkipSelfAnimal?: AnimalService,
      @Optional() @SkipSelf() public skipSelfAnimal?: AnimalService,
      @Optional() @Self() public selfAnimal?: AnimalService,
      public flower?: FlowerService
  ) {}
}
