import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onAddSnippetClick() {
    this.router.navigate(['/','add_snippet']);
  }

}
