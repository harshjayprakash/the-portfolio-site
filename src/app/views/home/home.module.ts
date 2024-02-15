import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: "", title: "Home", component: HomePage }])
    ],
    exports: [RouterModule]
})
export class HomeModule { }
