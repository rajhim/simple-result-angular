import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {CommonComponent} from './shared/common/common.component';
import {Common_ROUTES} from './shared/routes/common.routes';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/standing',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CommonComponent,
    children: Common_ROUTES
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})

export class AppRoutingModule {
}
