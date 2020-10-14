import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName = '';
  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  clear(): void {
      this.userName = '';
      this.isActive = true;
  }

  onUpdateUserName(event: Event): void {
    if ((event.target as HTMLInputElement).value !== ''){
      this.isActive = true;
    }
    else {
      this.isActive = false;
    }
  }
}
