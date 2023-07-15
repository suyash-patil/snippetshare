import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySnippetsPageRoutingModule } from './my-snippets-routing.module';

import { MySnippetsPage } from './my-snippets.page';
import { MenuHeaderModule } from '../shared/menu-header/menu-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySnippetsPageRoutingModule,
    MenuHeaderModule
  ],
  declarations: [MySnippetsPage]
})
export class MySnippetsPageModule {}
