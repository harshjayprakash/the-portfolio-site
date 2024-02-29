import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ViewsModule } from '../views/views.module';

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
