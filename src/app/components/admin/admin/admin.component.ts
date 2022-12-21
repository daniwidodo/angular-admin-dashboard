import { Component, OnInit } from '@angular/core';
import { SIDENAV_SETTING } from 'src/settings/settings';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sidenavStyle = `background-color: ${SIDENAV_SETTING.sidenavColor}; color: white; padding :15px; width: 20rem;`;

  constructor() { }

  ngOnInit(): void {
  }

}
