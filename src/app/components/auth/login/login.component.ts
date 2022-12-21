import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    // username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private auth: AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(!this.loginForm.valid){
      alert('Please fill all required forms')
    }

    const body = {
      email : this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.auth.login(body).subscribe( i => {
      console.log(i)
    })
  }

}
