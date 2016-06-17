import {Component} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {TwitterService} from '../../services/twitter.service'
import {TimelineStore} from '../../services/timeline.store'
import {TweetComponent} from '../tweet/tweet'
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'my-app',
    directives: [TweetComponent, ROUTER_DIRECTIVES],
    templateUrl: 'components/home/home.html',
    providers: [HTTP_PROVIDERS, TwitterService, TimelineStore]
})
export class AppComponent {

    constructor(private twittrService:TwitterService,
                private store:TimelineStore) {
        this.twittrService
            .getTimeline()
            .subscribe(
                res => {
                    store.store(res.json());
                },
                error => console.log(error)
            );
    }
}
