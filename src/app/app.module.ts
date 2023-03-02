import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  BalAccordionModule,
  BalCoreModule,
  BalHeadingModule,
} from '@baloise/design-system-components-angular';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [
    BrowserModule,
    BalCoreModule.forRoot(),
    BalHeadingModule,
    BalAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
