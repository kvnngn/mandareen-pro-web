import {Component, OnInit, NgZone} from '@angular/core';
import {ProService} from '../../providers';

@Component({
    selector: 'app-reports',
    templateUrl: './followups.component.html',
    styleUrls: ['./followups.component.css']
})
export class FollowupsComponent implements OnInit {

    reports: any = [];
    patients: any = [];

    constructor(private proService: ProService,
                private ngZone: NgZone) {
    }

    ngOnInit() {
        // this.getReports();
    }

    getReports() {

    }
}
