import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from '../components/index'
import {APP_ROUTER_PROVIDERS} from 'scripts/main.routes';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
]).catch(err => console.error(err));