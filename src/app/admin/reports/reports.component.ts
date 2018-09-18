import {Component, OnInit, NgZone} from '@angular/core';
import {ProService} from '../../providers';
import {PatientService} from '../../providers/patient.service';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

    reports: any = [];
    patients: any = [];

    constructor(private proService: ProService,
                private patientService: PatientService,
                private ngZone: NgZone) {
    }

    ngOnInit() {
        this.getReports();
    }

    getReports() {
        this.proService.getReports().subscribe(
            reports => {
                this.ngZone.run(() => {
                    this.reports = reports;
                    this.getPatients();
                });
            },
            error => {
                console.log(error);
            }
        );
    }

    getPatients() {
        for (let i = 0; i < this.reports.length; i++) {
            this.patientService.getPatientById(this.reports[i].patient_id).subscribe(
                patient => {
                    this.ngZone.run(() => {
                        this.patients[i] = patient;
                    });
                },
                error => {
                    console.log(error);
                }
            );
        }
        console.log(this.reports);
        console.log(this.patients);
    }
}
