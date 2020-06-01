import {Component, OnInit, DoCheck} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
  title = 'taskmanager';
  public login;
  constructor(public router:Router) {

  }

  ngOnInit(): void {
    this.login= localStorage.getItem('user');
  }
  closeSesion(){
    localStorage.removeItem('user');
    localStorage.clear();
    this.ngOnInit();
    this.router.navigate(['/login']);
  }
  ngDoCheck() {
    this.login= localStorage.getItem('user');
  }

}
