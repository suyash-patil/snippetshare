import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSnippetPage } from './add-snippet.page';

const routes: Routes = [
  {
    path: '',
    component: AddSnippetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSnippetPageRoutingModule {}
