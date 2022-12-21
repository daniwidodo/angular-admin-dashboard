import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (!this.loginForm.valid) {
      alert('Please fill all required forms');
    } else if (this.loginForm.valid) {
      const body = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      this.auth
        .login(body)
        .pipe(
          catchError(async (err) => {
            console.log(err, err.error);
            // alert(JSON.stringify(err.error.message) )
            alert(err.error.message);
          })
        )
        .subscribe((res: any) => {
          console.log(res);
          if (res.status == true) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
            // this.router.navigate(['admin/dashboard'])
          }
        });
    }
  }

  goToRegister() {
    this.router.navigate(['/', 'register']);
  }
}
