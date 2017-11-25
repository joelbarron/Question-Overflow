import { NgModule } from '@angular/core';

import {  MatToolbarModule,
          MatIconModule,
          MatCardModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          MatListModule,
          MatGridListModule,
          MatRadioModule,
          MatProgressSpinnerModule,
          MatMenuModule,
          MatSnackBarModule,
          MatTabsModule
       } from '@angular/material';


const mod = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTabsModule
];

@NgModule({
  imports: mod,
  exports: mod
})
export class MaterialModule { }
