import {Routes} from '@angular/router';
import {FollowupsComponent} from './followups/followups.component';
import {HomeComponent} from './home/home.component';
import {PatientsComponent} from './patients/patients.component';
import {PatientsNewComponent} from './patients/patients-new.component';
import {ReportsComponent} from './reports/reports.component';
import {SettingsComponent} from './settings/settings.component';

export const AdminRoutes: Routes = [
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'patients',
            component: PatientsComponent
        },
        {
            path: 'patients/new',
            component: PatientsNewComponent
        },
        {
            path: 'reports',
            component:
            ReportsComponent
        }
        ,{
            path: 'followups',
            component:
            FollowupsComponent
        }
        ,
        {
            path: 'settings',
            component:
            SettingsComponent
        }
    ]
;
