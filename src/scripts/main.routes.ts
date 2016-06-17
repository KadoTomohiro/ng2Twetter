import {provideRouter, RouterConfig} from '@angular/router';
import {TimelinesComponent} from '../components/timelines/timelines'
import {DetailComponent} from '../components/detail/detail'

export const routes:RouterConfig = [
    {path: '/timelines', component: TimelinesComponent, index: true},
    {path: '/detail/:id', component: DetailComponent},
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];