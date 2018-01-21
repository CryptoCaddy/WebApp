import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routing-module';
import { AppComponent } from './app.page';
import { CoreModule } from './modules/core/module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
