import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  template: `<ejs-schedule height="350" width="600" cssClass="cal"> </ejs-schedule>`,
  // templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}