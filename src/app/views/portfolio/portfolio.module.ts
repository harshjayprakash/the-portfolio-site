import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PortfolioPage } from './portfolio.page';
import { ComputerScienceModule } from './computer-science/computer-science.module';
import { FineArtModule } from './fine-art/fine-art.module';

@NgModule({
    declarations: [
        PortfolioPage,
    ],
    imports: [
        CommonModule,
        ComputerScienceModule,
        FineArtModule,
        RouterModule.forChild([
            { path: '', title: 'Portfolio', component: PortfolioPage },
            { path: 'computer-science', title: 'Computer Science Portfolio',
                loadChildren: () => ComputerScienceModule },
            { path: 'fine-art', title: 'Fine Art Portfolio',
                loadChildren: () => FineArtModule }
        ])
    ],
    exports: [RouterModule]
})
export class PortfolioModule { }
