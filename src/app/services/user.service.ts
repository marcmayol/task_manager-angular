import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  login() {

    //aquí obviemente abría una petición por post a la api pero que solo es un test si es llamada esta función solo setea la cookie con el id 6
    localStorage.setItem('user', '6');
    return true;

  }
}
