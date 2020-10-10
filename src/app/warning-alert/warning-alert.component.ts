import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>warning-alert works!</p>
  `,
  styles: [
    `
      p {
        padding: 20px;
        color: black;
        border: 1px solid red;
        background-color: indianred;
      }
    `
    ]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
