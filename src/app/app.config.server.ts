import { mergeApplicationConfig, ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt); 

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: LOCALE_ID,
      useValue: 'pt-br'
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
