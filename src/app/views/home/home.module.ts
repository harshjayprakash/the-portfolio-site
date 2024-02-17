import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { RouterModule } from "@angular/router";
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeSkillsComponent } from './home-skills/home-skills.component';
import { HomePastProjectsComponent } from './home-past-projects/home-past-projects.component';

@NgModule({
    declarations: [
        HomePage,
        HomeHeroComponent,
        HomeSkillsComponent,
        HomePastProjectsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: "", title: "Home", component: HomePage }])
    ],
    exports: [RouterModule]
})
export class HomeModule { }
