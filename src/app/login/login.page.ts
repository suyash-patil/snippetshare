import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  fg: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private storageService: StorageService, private router: Router, private matSnackbar: MatSnackBar) { }

  ngOnInit() {
    this.fg = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onLogin() {
    if(!this.fg.valid) {
      this.fg.markAllAsTouched();
    }
    else {
      const email = this.fg.controls['email'].value;
      const password = this.fg.controls['password'].value;
      
      this.http.post(`${environment.apiUrl}/api/user/login`, {email, password}).subscribe({
        next: (res: any) => {
            this.storageService.set('user', res);
            this.router.navigate(['/', 'home']);
          },
        error: (err) => {
          console.log('err', err);
          this.matSnackbar.open(err.error, 'Close', {duration: 2000, verticalPosition: 'bottom', panelClass: 'danger-snackbar'});
        },
      });
    }
  }

}
