import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySnippetsPage } from './my-snippets.page';

const routes: Routes = [
  {
    path: '',
    component: MySnippetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySnippetsPageRoutingModule {}
