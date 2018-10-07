import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../providers';
import {AlertService} from '../../providers/alert.service';
import {PatientService} from '../../providers/patient.service';
import {ReportsService} from '../../providers/reports.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    user: any;

    constructor(private patientService: PatientService,
                private ngZone: NgZone,
                private reportsService: ReportsService,
                private authentificationService: AuthenticationService,
                private _Activatedroute: ActivatedRoute,
                private alertService: AlertService,
                private router: Router) {
        this.user = this.authentificationService.getUser();
        console.log(this.user);
    }

    ngOnInit() {
    }

}
