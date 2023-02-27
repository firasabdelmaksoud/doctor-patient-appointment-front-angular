import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  Users: any = [];
  id = this.actRoute.snapshot.params['id'];
  userObj: any = {};
  constructor(
    public doctorService: DoctorService,
    public actRoute: ActivatedRoute,
    public router: Router
    
    
    ) {}

  p: number = 1;
  collection: any[] = [1,2];
  close=false;
  ngOnInit() {
    this.fetchDoctors();
    this.doctorService.getSingleDoctor(this.id).subscribe((res: {}) => {
      this.userObj = res;
    });
  }
  fetchDoctors() {
    return this.doctorService.getDoctors().subscribe((res: {}) => {
      this.Users = res;
    });
  }
  delete(id: any) {
    if (window.confirm('Really?')) {
      this.doctorService.deleteDoctor(id).subscribe((res) => {
        this.fetchDoctors();
      });
    }
  }
  updateUser(id: any, data: any) {
    if (window.confirm('Yes, please...')) {
      this.doctorService.updateDoctor(this.id, data).subscribe((res) => {
        this.router.navigate(['/admin/doctors']);
      });
    }
  }
  showDelete(){

    this.close = !this.close;
  }
}
