import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/entity/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  name = '';
  email = '';
  passwordSignUp = '';
  rePasswordSignUp = '';

  isError = false;
  isErrorPassword = false;
  isErrorEmail = false;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {}

  login() {
    this.userService.getAllUsers().subscribe(users => {
      const user = users.find(userData => userData.email === this.username && userData.password === this.password)
      if (user) {
        localStorage.setItem('userId', `${user.id}`);
        localStorage.setItem('username', `${user.name}`);
        this.router.navigate(['../homepage'], { relativeTo: this.route });
      } else {
        this.isError = true;
      }
    });
  }

  signUp() {
    this.isErrorPassword = this.rePasswordSignUp !== this.passwordSignUp;
    this.isErrorEmail = !this.email.match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    if (this.isErrorPassword || this.isErrorEmail) {
      return;
    }
    const user: User = new User(this.name, this.email, this.passwordSignUp);
    this.userService.creatUser(user).subscribe(userData => {
      this.router.navigate(['../homepage'], { relativeTo: this.route });
    });
  }

  chooseTab(value: string) {
    if (value === 'SignUp') {
      this.username = '';
      this.password = '';
      this.isError = false;
    } else {
      this.name = '';
      this.email = '';
      this.passwordSignUp = '';
    }
  }
}
