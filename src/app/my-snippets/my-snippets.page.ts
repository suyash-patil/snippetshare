import { Component, OnInit } from '@angular/core';
import { snippets } from 'src/db/snippets';

@Component({
  selector: 'app-my-snippets',
  templateUrl: './my-snippets.page.html',
  styleUrls: ['./my-snippets.page.scss'],
})
export class MySnippetsPage implements OnInit {

  snippets: any;
  constructor() { }

  ngOnInit() { 
    this.snippets = snippets;
  }

}
