import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashMessangerComponent } from './flash-messanger.component';

@NgModule({
  declarations: [
    FlashMessangerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlashMessangerComponent
  ]
})
export class FlashMessangerModule { }
