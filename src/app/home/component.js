import {Component} from '@angular/core';

@Component ({
    selector : 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage    {
        user={
            name: 'Javaid Iqbal',
            city: 'Rawalpindi',
            interests: ['Education', 'Teaching' , 'Guiding']
        };
        constructor(){}
}


