import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  isChecked = true;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(desc: string) {
    console.log(desc)
    console.log('Checked : ', this.isChecked)
  }
}
