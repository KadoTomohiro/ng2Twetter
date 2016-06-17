/**
 * Created by riaux03 on 2016/06/16.
 */
import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';

@Injectable()
export class TwitterService {
    private url:string = 'http://localhost:8000/api/twitter/';
    private params:URLSearchParams;


    constructor(private http:Http) {
        this.params = new URLSearchParams();
    }

    getTimeline() {
        return this.http
            .get(this.url, {search: this.params});
    }
}