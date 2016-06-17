import {Injectable} from '@angular/core';
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
        let tweet;
        this.cache.some(item => {
            if (item.id === id) {
                tweet = item;
                return true;
            }
        });
        return tweet;
    }
}