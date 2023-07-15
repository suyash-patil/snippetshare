import { NgModule } from '@angular/core';
import { MenuHeaderComponent } from './menu-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
      ],
  declarations: [
    MenuHeaderComponent,
  ],
  exports: [
    MenuHeaderComponent
  ]
})
export class MenuHeaderModule { }