import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardedcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    //console.log('before' + this.isUserLogedin)
    if (username === "Ravi" && password === 'admin') {
      sessionStorage.setItem('authenticaterUser', username)
      //console.log('after' + this.isUserLogedin)
      return true;
    }
    return false;
  }

  isUserLogedin() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
  }

}
