import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { app } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(app, config, context);

export default bootstrap;
