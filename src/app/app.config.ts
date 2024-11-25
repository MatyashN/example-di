import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { AnimalService } from './animal.service';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: AnimalService, useValue: { emoji: '🦄' }
    },
    provideZoneChangeDetection( { eventCoalescing: true } ),
    provideRouter( routes, withComponentInputBinding() ),
  ],
};
