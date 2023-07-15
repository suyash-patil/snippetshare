import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { MenuHeaderModule } from '../shared/menu-header/menu-header.module';
import { MenuHeaderComponent } from '../shared/menu-header/menu-header.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    MenuHeaderModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
