import {Component} from '@angular/core'
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {BUTTON_DIRECTIVES} from 'ng2-bootstrap';


@Component({
    selector: 'my-app',
    directives: [],
    template: `
  <h1>{{name}} Hello!</h1>
  `

})

export class AppComponent {
    public name = 'Angular';
}
