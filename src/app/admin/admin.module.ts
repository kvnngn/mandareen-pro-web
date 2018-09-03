import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FollowupsComponent} from './followups/followups.component';
import {HomeComponent} from './home/home.component';
import {PatientsComponent} from './patients/patients.component';
import {ReportsComponent} from './reports/reports.component';
import {SettingsComponent} from './settings/settings.component';
import {AdminRoutes} from './admin.routing';
import {PatientsNewComponent} from './patients/patients-new.component';

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        HomeComponent,
        PatientsComponent,
        PatientsNewComponent,
        ReportsComponent,
        SettingsComponent,
        FollowupsComponent
    ],
    providers: [],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminModule {
}
