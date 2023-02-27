import { Component, OnInit } from '@angular/core';
import { faBars,faHome,faSignOutAlt,faUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  faHome = faHome;
  faBars=faBars;
  logout=faSignOutAlt;
  user=faUser

}


