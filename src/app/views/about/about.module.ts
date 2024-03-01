import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPage } from './about.page';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AboutPage
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', title: 'About', component: AboutPage }])
    ],
    exports: [RouterModule]
})
export class AboutModule { }
