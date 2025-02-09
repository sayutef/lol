import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CarGateway } from './products/domain/models/gateway/car-gateway';
import { CarApiService } from './products/infraestructure/driver-adapter/car-api.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // ✅ Importa la implementación

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: CarGateway, useClass: CarApiService }, // ✅ Inyecta la implementación correcta
    provideClientHydration(),
    provideAnimationsAsync(),
  ]
};
