import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isChecked = true;

  clicked(desc: string) {
    console.log(desc)
    console.log('Checked : ', this.isChecked)
  }

  title = 'angular-material';
}
