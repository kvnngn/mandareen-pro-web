import {Component, OnInit, NgZone} from '@angular/core';
import {ProService} from '../providers/pro.service';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

    patients: any = [];

    constructor(private proService: ProService,
                private ngZone: NgZone) {
    }

    ngOnInit() {
        this.getPatients();
    }

    getPatients() {
        this.proService.getPatients().subscribe(
            patients => {
                this.ngZone.run(() => {
                    this.patients = patients;
                    console.log(patients);
                });
            },
            error => {
                console.log(error);
            }
        );
    }
}
