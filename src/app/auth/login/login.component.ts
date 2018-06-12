import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../providers';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    pro: any = {'email': '', 'password': ''};

    constructor(private authenticationService: AuthenticationService,
                private router: Router) {
    }

    ngOnInit() {
    }

    submit(e) {
        if (this.pro.email && this.pro.password) {
            this.authenticationService.login(this.pro).subscribe(
                res => {
                    let url = this.authenticationService.getHomeURL();
                    if (localStorage.getItem('requestedURL')) {
                        url = localStorage.getItem('requestedURL');
                        localStorage.removeItem('requestedURL');
                    }
                    this.router.navigate([url]);
                },
                error => {console.log(error);}
            );
        }
    }
}
