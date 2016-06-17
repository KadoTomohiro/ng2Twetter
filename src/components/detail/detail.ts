import {Component} from '@angular/core'
import {ActivatedRoute} from '@angular/router';
import {TweetComponent} from '../tweet/tweet'
import {TimelineStore} from '../../services/timeline.store'

@Component({
    selector: 'my-app',
    directives: [TweetComponent],
    templateUrl: 'components/detail/detail.html',
})
export class DetailComponent {

    tweet:any;

    constructor(private route:ActivatedRoute,
                private store:TimelineStore) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                let id = params['id'];

                this.store.getTweet(id)
                    .subscribe(tweet => this.tweet = tweet);
            })
    }
}
