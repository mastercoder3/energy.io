import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  change='';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(res =>{
      this.change = this.router.url;
    })
  }

}
