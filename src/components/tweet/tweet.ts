import {Component, Input} from '@angular/core'
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'tweet',
    templateUrl: 'components/tweet/tweet.html',
    directives: [TweetComponent, MODAL_DIRECTVES],
    viewProviders: [BS_VIEW_PROVIDERS]
})
export class TweetComponent {
    @Input() data:any;

    constructor() {
    }
}
