import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from './services/user.service';




@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent {
  date!: number;
  distance!: number;
  time!: number;
  users: User[] = [];

  constructor(private userService:UserService) {
    this.users = this.userService.getUsers();
  } 

    addUser(): void{
      this.users.push(new User(this.date, this.distance, this.time))
    }
  
  
}
