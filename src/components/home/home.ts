import {Component} from '@angular/core'
import {Http, RequestOptionsArgs, URLSearchParams, HTTP_PROVIDERS} from '@angular/http';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {BUTTON_DIRECTIVES} from 'ng2-bootstrap';


@Component({
    selector: 'my-app',
    directives: [],
    template: `
  <h1>{{name}} Hello!</h1>
  <div *ngFor="let result of results">
    {{result.user.name}}: {{result.text}}
  </div>
  `,
    providers: [HTTP_PROVIDERS]


})

export class AppComponent {
    public name = 'Angular';
    private url:string = 'http://localhost:8000/api/twitter/';
    http:Http;
    params:URLSearchParams;
    results:any;

    constructor(http:Http) {
        this.http = http;
        this.params = new URLSearchParams();
        this.http
            .get(this.url, {search: this.params})
            .subscribe(
                res => {
                    this.results = res.json();
                },
                error => console.log(error)
            );
    }
}
