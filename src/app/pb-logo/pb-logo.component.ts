import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'pb-logo',
    templateUrl: './pb-logo.component.html',
    styleUrls: ['./pb-logo.component.sass']
})
export class PbLogoComponent implements OnInit {

    @Input() size: string;

    constructor() {
    }

    ngOnInit() {
    }

}
