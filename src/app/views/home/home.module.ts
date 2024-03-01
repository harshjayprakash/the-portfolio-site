import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeHeroComponent } from './home-hero/home-hero.component';

@NgModule({
    declarations: [
        HomePage,
        HomeHeroComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', title: 'Home', component: HomePage }])
    ],
    exports: [RouterModule]
})
export class HomeModule { }
