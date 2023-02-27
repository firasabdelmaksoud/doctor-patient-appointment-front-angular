import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from 'src/app/interfaces/UserType';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  UserType = UserType ; 
  @Input() userObj = { email: '', password: '', type: '',confirmed: '',referralId:'' }
  constructor(
    public userService: UserService, 
    public router: Router
  ) { }

  ngOnInit(): void { }
  addUser(data: any) {
    this.userService.addUser(this.userObj).subscribe((data: {}) => {
      this.router.navigate(['/admin/adduser'])
    })
  }

}
