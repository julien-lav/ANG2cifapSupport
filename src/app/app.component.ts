import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Salut, comment va {{name}}?</h1>`,

  styles: [`

    h1{
      color: red;
      text-transform: uppercase;
    }

  `]
})
export class AppComponent  { name = 'John Smith'; }
