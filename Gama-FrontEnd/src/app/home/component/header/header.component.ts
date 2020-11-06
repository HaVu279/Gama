import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
      this.username = localStorage.getItem('username');
    if(!localStorage.getItem('userId')) {
      this.router.navigate(['../login'], { relativeTo: this.route });
    }
  }

  logout() {
    if(localStorage.getItem('userId')) {
      localStorage.removeItem('userId')
    }
    this.router.navigate(['../login'], { relativeTo: this.route });
  }
}
