import {Component, OnInit} from '@angular/core';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: '/admin/home', title: 'Accueil', icon: 'fa fa-home', class: ''},
    {path: '/admin/patients', title: 'Mes patients', icon: 'fa fa-user', class: ''},
    {path: '/admin/reports', title: 'Mes rapports', icon: 'fa fa-clipboard', class: ''},
    {path: '/admin/settings', title: 'Paramètres', icon: 'fa fa-cogs', class: ''},
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

}
