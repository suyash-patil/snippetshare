import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSnippetPageRoutingModule } from './add-snippet-routing.module';

import { AddSnippetPage } from './add-snippet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddSnippetPageRoutingModule
  ],
  declarations: [AddSnippetPage]
})
export class AddSnippetPageModule {}
