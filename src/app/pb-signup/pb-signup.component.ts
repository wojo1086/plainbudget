import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'pb-signup',
    templateUrl: './pb-signup.component.html',
    styleUrls: ['./pb-signup.component.sass']
})
export class PbSignupComponent implements OnInit {
    signup = {
        firstName: ''
    };

    constructor() {
    }

    ngOnInit() {
    }

}
