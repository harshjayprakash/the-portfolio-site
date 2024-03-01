import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComputerSciencePage } from './computer-science.page';

@NgModule({
    declarations: [
        ComputerSciencePage
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', title: 'Computer Science Portfolio',
                component: ComputerScienceModule }
        ])
    ],
    exports: [RouterModule]
})
export class ComputerScienceModule { }
