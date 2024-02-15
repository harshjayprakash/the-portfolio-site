import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HomeModule } from "./home/home.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: "", title: "Home", loadChildren: () => HomeModule }
        ]),
    ],
    exports: [RouterModule]
})
export class ViewsModule { }
