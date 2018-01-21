import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatIconModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppConfigService } from 'app/modules/shared/app-config.service';
import { SharedModule } from 'app/modules/shared/module';

import { FooterComponent } from './components/footer/component';
import { FourOhFourComponent } from './components/four-oh-four/component';
import { NavbarComponent } from './components/navbar/component';
import { throwIfAlreadyLoaded } from './module-import-guard';

/**
 * Core module containing components and services only imported by the AppModule.
 *
 * @export
 * @class CoreModule
 */
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    SharedModule,
    RouterModule.forChild([ ]),
  ],
  declarations: [
    FooterComponent,
    FourOhFourComponent,
    NavbarComponent,
  ],
  exports: [
    FooterComponent,
    FourOhFourComponent,
    NavbarComponent,
  ],

  // App-wide providers
  providers: [
    AppConfigService,
  ],

})
export class CoreModule {

  /**
   * Creates an instance of CoreModule.
   *
   * @param {CoreModule} parentModule
   */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}
