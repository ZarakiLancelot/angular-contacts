import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buttons',
  template: `
    <button mat-button>
      <mat-icon>home</mat-icon>
      Click Here!
    </button>
    <mat-checkbox>Check me!</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
