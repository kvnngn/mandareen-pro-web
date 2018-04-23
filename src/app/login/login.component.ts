import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProService} from '../providers/pro.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    pro: any = {};

    constructor(private proService: ProService) {

    }

    ngOnInit() {
    }

    submit(e) {
        this.pro.username = e.target.elements[0].value;
        this.pro.password = e.target.elements[1].value;
        if (this.pro.username && this.pro.password) {
            this.proService.login(this.pro).subscribe(
                res => {
                    console.log(res);
                },
                error => {
                    console.log(error);
                }
            );
        }
    }

    test() {
        this.proService.getPatients().subscribe(
            res => {
                console.log(res);
            },
            error => {
                console.log(error);
            }
        );
    }
}
