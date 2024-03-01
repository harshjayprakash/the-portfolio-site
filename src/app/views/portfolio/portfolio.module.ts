import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioPage } from './portfolio.page';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PortfolioPage
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', title: 'Portfolio', component: PortfolioPage }
        ])
    ],
    exports: [RouterModule]
})
export class PortfolioModule { }
