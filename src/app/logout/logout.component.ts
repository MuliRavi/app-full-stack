import { Component, OnInit } from '@angular/core';
import { HardedcodedAuthenticationService } from '../service/hardedcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardedcodedAuthenticationService: HardedcodedAuthenticationService) { }

  ngOnInit() {
    this.hardedcodedAuthenticationService.logout();
  }

}
