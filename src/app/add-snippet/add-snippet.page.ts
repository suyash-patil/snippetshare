import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.page.html',
  styleUrls: ['./add-snippet.page.scss'],
})
export class AddSnippetPage implements OnInit {

  fg: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.fg = this.formBuilder.group({
      title: ['', [Validators.required]],
      snippet: ['', [Validators.required]],
    });
  }

  ionViewWillEnter() {
    
  }

  onCancelClick() {
    this.router.navigate(['/','home']);
  }

  onSave() {
    if(!this.fg.valid) {
      this.fg.markAllAsTouched();
    }
    else {
      const newSnippet = {
        title: this.fg.controls['title'].value,
        snippet: this.fg.controls['snippet'].value,
        created_at: new Date(),
      };
      console.log(newSnippet);
    }
  }

}
