import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeModule } from "./home/home.module";

export const ROUTES: Routes = [
    { path: "", title: "Home", loadChildren: () => HomeModule }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
    ],
    exports: [RouterModule]
})
export class ViewsModule { }
