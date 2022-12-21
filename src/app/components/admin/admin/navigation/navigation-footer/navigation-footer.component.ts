import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-footer',
  templateUrl: './navigation-footer.component.html',
  styleUrls: ['./navigation-footer.component.scss']
})
export class NavigationFooterComponent implements OnInit {
   avatar: any ;
  constructor() {
    this.avatar = true
    this.avatar = this.avatar ? 'https://picsum.photos/60/60' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png';
   }

  ngOnInit(): void {
  }

}
