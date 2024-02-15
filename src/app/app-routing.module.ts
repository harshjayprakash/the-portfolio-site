import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsModule } from "./views/views.module";

@NgModule({
    imports: [RouterModule.forRoot([{ path: "", loadChildren: () => ViewsModule }])],
    exports: [RouterModule]
})
export class AppRoutingModule { }
