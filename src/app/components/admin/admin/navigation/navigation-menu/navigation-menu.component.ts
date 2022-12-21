import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  base_url = 'admin'
  sidenavMenu = [
    { label: 'Dashboard', icon: 'home', routeLink: `${this.base_url}/dashboard`},
    { label: 'Posts', icon: 'home', routeLink: `${this.base_url}/posts`},
]
  constructor(private router: Router) {
    console.log(this.sidenavMenu)
   }

  ngOnInit(): void {
  }

  menuHandler(event: any){
    this.router.navigate([`${event.routeLink}`])
    console.log(event)
  }

}
