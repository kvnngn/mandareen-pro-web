import {Component, OnInit, NgZone} from '@angular/core';
import {AuthenticationService} from '../../../providers';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../../../providers/alert.service';
import {PatientService} from '../../../providers/patient.service';


@Component({
    selector: 'app-patients',
    templateUrl: './patients-edit.html',
    styleUrls: ['./patients-edit.component.css']
})
export class PatientsEditComponent implements OnInit {

    patientId: any;
    user;
    patient = {
        email: '',
        firstname: '',
        lastname: ''
    };
    firstname = '';
    lastname = '';

    constructor(private patientService: PatientService,
                private ngZone: NgZone,
                private authentificationService: AuthenticationService,
                private _Activatedroute: ActivatedRoute,
                private alertService: AlertService,
                private router: Router) {
        this.user = this.authentificationService.getUser();
        this.patientId = this._Activatedroute.snapshot.params.id;
        this.getPatientById();
    }

    ngOnInit() {}

    getPatientById() {
        this.patientService.getPatientById(this.patientId).subscribe(
            patient => {
                this.patient = patient;
                this.firstname = patient.firstname
                this.lastname = patient.lastname
            },
            error => {}
        );
    }

    update() {
        this.patientService.update(this.patient).subscribe(
            patient => {
                this.firstname = this.patient.firstname;
                this.lastname = this.patient.lastname;
                this.alertService.alert('success', 'Le profil du patient a bien été mis à jour');
            },
            error => {this.alertService.alert('warning', 'Une erreur est survenue lors de la mise à jour du profil');}
        );
    }

    resetPassword() {
        this.patientService.resetPassword(this.patient).subscribe(
            patient => {this.alertService.alert('success', 'Un nouveau mot de passe a bien été envoyé par mail');},
            error => {this.alertService.alert('warning', 'Une erreur est survenue lors de la mise à jour du profil');}
        );
    }
}
