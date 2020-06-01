import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginForm: FormGroup;
  constructor(
    public userService: UserService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.router.navigate(['']);
    }
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&].{8,}'),
      ]),
    });
  }


  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
onSubmit(){
    // se replica en la medida de lo posible la funcionalidad que debería tener
    if(this.userService.login()){
      this.router.navigate(['']);
    }
}
}
