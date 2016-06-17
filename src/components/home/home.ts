import {Component, ViewContainerRef} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {TwitterService} from '../../services/twitter.service'
import {TimelineStore} from '../../services/timeline.store'
import {TweetComponent} from '../tweet/tweet'
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'my-app',
    directives: [TweetComponent, ROUTER_DIRECTIVES],
    templateUrl: 'components/home/home.html',
    providers: [HTTP_PROVIDERS, TwitterService, TimelineStore],
})
export class AppComponent {
    viewContainerRef:ViewContainerRef;

    constructor(twittrService:TwitterService, viewContainerRef:ViewContainerRef, store:TimelineStore) {
        this.viewContainerRef = viewContainerRef;
        twittrService
            .getTimeline()
            .subscribe(
                res => {
                    store.store(res.json());
                },
                error => console.log(error)
            );
    }
}
