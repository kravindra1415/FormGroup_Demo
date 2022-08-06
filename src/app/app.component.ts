import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  mandoForm = new FormGroup({
    name: new FormControl(),
    series: new FormControl('Amazon'),
  });

  onFormSubmit() {
    console.log('Name: ' + this.mandoForm.get('name').value);
    console.log('Series: ' + this.mandoForm.get('series').value);
  }
}
