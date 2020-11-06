import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
    
  }

  ngOnInit() {
    
  }

  login() {
    this.userService.getAllUsers().subscribe(users => {
      let user = users.find(user => user.email == this.username && user.password == this.password)
      if(user) {
        localStorage.setItem('userId', `${user.id}`);
        localStorage.setItem('username', `${user.name}`);
        this.router.navigate(['../homepage'], { relativeTo: this.route });
      }
    })
  }
  
}
