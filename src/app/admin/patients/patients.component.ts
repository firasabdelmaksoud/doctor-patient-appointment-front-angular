import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { patientService } from 'src/app/shared/patient.service';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  Users: any = [];
  id = this.actRoute.snapshot.params['id'];
  userObj: any = {};
  constructor(
    public patientService: patientService,
    public actRoute: ActivatedRoute,
    public router: Router
    
    ) {}

    p: number = 1;
  collection: any[] = [1,2];
  close=false;
  ngOnInit() {
    this.fetchPatients();
    this.patientService.getSinglepatient(this.id).subscribe((res: {}) => {
      this.userObj = res;
    });
  }
  fetchPatients() {
    return this.patientService.getpatients().subscribe((res: {}) => {
      this.Users = res;
    });
  }
  delete(id: any) {
    if (window.confirm('Really?')) {
      this.patientService.deletepatient(id).subscribe((res) => {
        this.fetchPatients();
      });
    }
  }
  updateUser(id: any, data: any) {
    if (window.confirm('Yes, please...')) {
      this.patientService.updatepatient(this.id, data).subscribe((res) => {
        this.router.navigate(['/admin/patients']);
      });
    }
  }

  showDelete(){

    this.close = !this.close;
  }
}
