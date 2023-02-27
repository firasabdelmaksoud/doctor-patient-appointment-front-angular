import { Component, OnInit } from '@angular/core';
import { patientService } from 'src/app/shared/patient.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Patients: any = [];
  p: number = 1;
  collection: any[] = [1,2];

  close:boolean=false;
  constructor(public patientService: patientService) { }

  ngOnInit(): void {
    this.fetchPatients();
  }
  fetchPatients() {
    return this.patientService.getpatients().subscribe((res: {}) => {
      this.Patients = res;
    });
  }
  delete(id: any) {
    if (window.confirm('Really?')) {
      this.patientService.deletepatient(id).subscribe((res) => {
        this.fetchPatients();
      });
    }
  }

  showAddTreat(){

    this.close=!this.close;
  }

}
