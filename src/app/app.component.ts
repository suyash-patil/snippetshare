import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Preferences} from '@capacitor/preferences';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private storageService: StorageService) {

  }

  ngOnInit() {
    this.storageService.get('user').then((user) => {
      if(user) {
        this.router.navigate(['/', 'home']);
      }
      else {
        this.router.navigate(['/', 'login']);
      }
    });
  }
}
