import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  constructor(    private auth: AuthenticationService,
    ) {}

  ngOnInit(): void {
    const user = this.auth.getUser()
    console.log(user.username)
  }

  getObj() {
    const newObject: any = localStorage.getItem('user');
    console.log(JSON.parse(newObject));
    // setTimeout( () => {
    //   const newObject: any = localStorage.getItem('user');
    //   console.log(JSON.parse( newObject, newObject.id))
    // }, 1000)
  }
}
