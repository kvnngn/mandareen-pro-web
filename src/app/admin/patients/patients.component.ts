import {Component, OnInit, NgZone} from '@angular/core';
import {AuthenticationService, ProService} from '../../providers';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

    patients: any = [];
    user;

    constructor(private proService: ProService,
                private authentificationService: AuthenticationService,
                private ngZone: NgZone) {
        this.user = this.authentificationService.getUser();
        console.log(this.user.pro.id);
    }

    ngOnInit() {
        this.getPatientsByPro();
    }

    getPatientsByPro() {
        this.proService.getPatientsByPro(this.user.pro.id).subscribe(
            patients => {
                this.ngZone.run(() => {
                    this.patients = patients;
                });
            },
            error => {
                console.log(error);
            }
        );
    }
}
