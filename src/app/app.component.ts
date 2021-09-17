import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  answers = [
    {name: "Answer 1"},
    {name: "Answer 2"},
    {name: "Answer 3"},
    {name: "Answer 4"},
  ]
}
