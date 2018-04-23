import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';
import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';


import {HomeComponent} from './home/home.component';
import {ApiService} from './providers/api.service';
import {ProService} from './providers/pro.service';
import {PatientsComponent} from './patients/patients.component';
import {ReportsComponent} from './reports/reports.component';
import {SettingsComponent} from './settings/settings.component';
import {LoginComponent} from './login/login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PatientsComponent,
        ReportsComponent,
        SettingsComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes),
        SidebarModule,
        NavbarModule,
        FooterModule,
    ],
    providers: [ApiService, ProService, HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule {
}
