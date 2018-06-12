import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Rx';
import {User} from "../../_models";

@Injectable()
export class ProService {
    constructor(private api: ApiService) {
    }

    getPatients(): Observable<any> {
        return this.api.get('/patients/account/patients/');
    }

    getPatientsByPro(id): Observable<any> {
        return this.api.get('/pro/account/patients/proId/' + id);
    }

    getReports(): Observable<any> {
        return this.api.get('/pro/account/reports/');
    }

    getPatientById(id): Observable<any> {
        return this.api.get('/patients/account/patients/' + id);
    }

    createPatient(patient) {
        return this.api.post('/pro/patient/create/', patient);
    }
}
