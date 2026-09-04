import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { PortfolioPreset } from './theme/portfolio-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'top',
      }),
    ),
    provideClientHydration(),
    providePrimeNG({
      license:
        'eyJpZCI6IjhmZTQ2ZGJhLTFlMjUtNDBjMi1iOTIwLTQ4OWRkY2RmMTE4YSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODg0NTA4OTIsImV4cCI6MTgxOTk4Njg5Mn0.YZByORBklJnCO2wJdZ-iSFTK1fi8Q0B2dpxo1pNYfS_diN7VIt0TFWhzTF8RZlsl7DXHRV4aBLcR8MGyeG6tBg',
      theme: {
        preset: PortfolioPreset,
        options: {
          darkModeSelector: '.app-dark',
        },
      },
    }),
  ],
};
