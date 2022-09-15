import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.ReadAllUsersHandler();
  }

  ReadAllUsersHandler(){
    this.userService.getUsers().subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('complete')
    });
  }

}
