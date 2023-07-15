import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.page.html',
  styleUrls: ['./add-snippet.page.scss'],
})
export class AddSnippetPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCancelClick() {
    this.router.navigate(['/','home']);
  }

}
