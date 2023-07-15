import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSnippetPageRoutingModule } from './add-snippet-routing.module';

import { AddSnippetPage } from './add-snippet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSnippetPageRoutingModule
  ],
  declarations: [AddSnippetPage]
})
export class AddSnippetPageModule {}
