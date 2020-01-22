import { Component, OnInit } from '@angular/core';
import { HardedcodedAuthenticationService } from '../service/hardedcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLogedIn: boolean = false

  constructor(private hardedcodedAuthenticationService: HardedcodedAuthenticationService) { }

  ngOnInit() {
    //this.isUserLogedIn = this.hardedcodedAuthenticationService.isUserLogedin()
  }

}
