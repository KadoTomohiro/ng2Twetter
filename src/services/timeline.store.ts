import {Injectable} from '@angular/core';
import * as Rx from 'rxjs/Rx'

@Injectable()
export class TimelineStore {
    private cache:any;

    constructor() {
    }

    public store(data) {
        this.cache = data;
    }

    public getTimeline() {
        return this.cache;
    }

    public getTweet(id) {
        return Rx.Observable
            .from(this.cache)
            .filter((tweet:any) => tweet.id === id)
            .map(tweet => tweet);
    }
}