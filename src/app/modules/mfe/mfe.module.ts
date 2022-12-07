import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MfeComponent} from './mfe/mfe.component';
import {MfeRoutingModule} from './mfe-routing.module';
import {NotesService} from './services/notes.service';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MfeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MfeRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: 'NotesService',
      useClass: NotesService
    }
  ]
})
export class MfeModule {
}
