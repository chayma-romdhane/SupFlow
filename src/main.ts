import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import {app} from './app/app';

bootstrapApplication(app, {
  providers: []
}).catch(err => console.error(err));
