import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pf-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

    copyrightYear!: string;

    constructor() { }

    ngOnInit(): void {
        this.copyrightYear = (new Date()).getFullYear().toString();
    }

}
