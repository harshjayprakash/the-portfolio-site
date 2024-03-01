import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { ROUTES } from '../../views/views.module';

@Component({
    selector: 'pf-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

    showMenu!: boolean;
    routes_!: Routes;

    constructor() { }

    ngOnInit(): void {
        this.showMenu = false;
        this.routes_ = ROUTES.filter(
            (route) =>
                route.title === 'Home' ||
                route.title === 'Portfolio' ||
                route.title === 'About'
        );
    }

    onNavLinkClick(): void {
        this.showMenu = false;
    }

}
