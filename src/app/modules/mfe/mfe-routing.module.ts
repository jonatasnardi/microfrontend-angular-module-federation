import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MfeComponent} from './mfe/mfe.component';

const routes: Routes = [
  {
    path: 'mfe',
    component: MfeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'mfe'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mfe'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MfeRoutingModule {
}
