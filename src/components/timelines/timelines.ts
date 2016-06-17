import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {TweetComponent} from '../tweet/tweet'
import {TimelineStore} from '../../services/timeline.store'

@Component({
    selector: 'my-app',
    directives: [TweetComponent],
    templateUrl: 'components/timelines/timelines.html',
})
export class TimelinesComponent {

    store:TimelineStore;
    results:any;

    constructor(store:TimelineStore, private router:Router) {
        this.store = store;
        this.results = store.getTimeline();
    }

    toDetail(id) {
        this.router.navigate(['/detail', id]);
    }


}
