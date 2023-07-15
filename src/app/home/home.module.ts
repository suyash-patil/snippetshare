import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HomeContentComponent } from './home-content/home-content.component';
import { MenuHeaderModule } from '../shared/menu-header/menu-header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MenuHeaderModule
  ],
  declarations: [HomePage, HomeContentComponent]
})
export class HomePageModule {}
