
import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor() { }

  close = false;
  ngOnInit(): void {
    setTimeout(()=>{

      this.close = true;
    },3000)
  }


  showLogin(){

    this.close=!this.close;
  }
}