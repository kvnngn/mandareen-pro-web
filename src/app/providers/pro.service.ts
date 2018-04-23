import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ProService {
    constructor(private api: ApiService) {
    }

    login(pro) {
        console.log("in LOGIN");
        return this.api.post('/pro/login/', pro);
    }

    test() {
        console.log("in TEST");
        return this.api.get('/admin/data/');
    }

    getPatients(): Observable<any> {
        return this.api.get('/patients/account/patients/');
    }

    getReports(): Observable<any> {
        return this.api.get('/reports/');
    }

    getPatientById(id): Observable<any> {
        return this.api.get('/patients/account/patients/' + id);
    }
}
