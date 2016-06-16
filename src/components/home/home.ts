import {Component, ViewContainerRef} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {TwitterService} from '../../services/twitter.service'
import {TweetComponent} from '../tweet/tweet'
@Component({
    selector: 'my-app',
    directives: [TweetComponent],
    templateUrl: 'components/home/home.html',
    providers: [HTTP_PROVIDERS, TwitterService],
})
export class AppComponent {
    results:any;
    viewContainerRef:ViewContainerRef;

    constructor(twittrService:TwitterService, viewContainerRef:ViewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        twittrService
            .getTimeline()
            .subscribe(
                res => {
                    this.results = res.json();
                },
                error => console.log(error)
            );
    }

}
