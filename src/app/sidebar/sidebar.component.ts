import {Component, OnInit} from '@angular/core';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: 'home', title: 'Accueil', icon: 'ti-home', class: ''},
    {path: 'patients', title: 'Mes patients', icon: 'ti-user', class: ''},
    {path: 'reports', title: 'Mes rapports', icon: 'ti-clipboard', class: ''},
    {path: 'settings', title: 'Paramètres', icon: 'ti-settings', class: ''},
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
