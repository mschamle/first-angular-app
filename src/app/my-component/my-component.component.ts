import { Component, OnInit } from '@angular/core';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styles: [`
    .high {
      color: white;
    }
  `]
})
export class MyComponentComponent implements OnInit {
  hideDetails = true;
  log = [];
  pipe = new DatePipe('en-US');

  constructor() { }

  ngOnInit(): void {
  }

  switch(): void {
    this.hideDetails = !this.hideDetails;
    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, 'short');
    this.log.push(myFormattedDate);
  }

}
