import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardedcodedAuthenticationService } from '../service/hardedcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='Ravi'
  password=''
  errorMessage='Invalid Credentials'
  invalidLogin=false

  constructor(private router:Router,private hardcodedAuthenticationService: HardedcodedAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){
    // console.log(this.username);
    //if(this.username==='Ravi'&& this.password==='admin'){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin=false
        }else{
          this.invalidLogin=true
        }

    
  }

}
