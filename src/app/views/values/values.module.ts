import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ValuesPage } from './values.page';

@NgModule({
    declarations: [
        ValuesPage
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', title: 'Values', component: ValuesPage }
        ])
    ]
})
export class ValuesModule { }
