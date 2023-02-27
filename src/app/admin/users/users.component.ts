import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../shared/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Users: any = [];
  id = this.actRoute.snapshot.params['id'];
  userObj: any = {};
  constructor(
    public userService: UserService,
    public actRoute: ActivatedRoute,
    public router: Router
    ) {}
  
  p: number = 1;
  collection: any[] = [1,2];
  close=false;
  ngOnInit() {
    this.fetchUsers();
    this.userService.getSingleUser(this.id).subscribe((res: {}) => {
      this.userObj = res;
    });
  }
  fetchUsers() {
    return this.userService.getUsers().subscribe((res: {}) => {
      this.Users = res;
    });
  }
  delete(id: any) {
    if (window.confirm('Really?')) {
      this.userService.deleteUser(id).subscribe((res) => {
        this.fetchUsers();
      });
    }
  }
  updateUser(id: any, data: any) {
    if (window.confirm('Yes, please...')) {
      this.userService.updateUser(this.id, data).subscribe((res) => {
        this.router.navigate(['/admin/users']);
      });
    }
  }

  showDelete(){

    this.close = !this.close;
  }

}
