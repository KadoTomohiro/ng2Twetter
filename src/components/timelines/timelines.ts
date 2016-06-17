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

    results:any;

    constructor(private store:TimelineStore, private router:Router) {
        this.results = this.store.getTimeline();
    }

    toDetail(id) {
        this.router.navigate(['/detail', id]);
    }


}
