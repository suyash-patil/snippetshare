import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent  implements OnInit {

  // Dependency Injection
  constructor(private router: Router, private menuController: MenuController) { }

  ngOnInit() {}

  onProfileClick() {
    this.menuController.close();
    this.router.navigate(['/', 'profile']);
  }

  onMySnippetsClick() {
    this.menuController.close();
    this.router.navigate(['/', 'my_snippets']);
  }

}
