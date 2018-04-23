import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {PatientsComponent} from './patients/patients.component';
import {ReportsComponent} from './reports/reports.component';
import {SettingsComponent} from './settings/settings.component';
import {LoginComponent} from './login/login.component';

export const AppRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'patients',
        component: PatientsComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
];
