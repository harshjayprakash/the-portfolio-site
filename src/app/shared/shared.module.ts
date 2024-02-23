import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from "@angular/router";
import { ViewsModule } from "../views/views.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ViewsModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent
    ]
})
export class SharedModule { }
