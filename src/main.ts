import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import './polyfills';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // tslint:disable-next-line: no-string-literal
    if (window['ngRef']) {
      // tslint:disable-next-line: no-string-literal
      window['ngRef'].destroy();
    }
    // tslint:disable-next-line: no-string-literal
    window['ngRef'] = ref;
  })

  .catch(err => console.error(err));
