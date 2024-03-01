import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReferencesPage } from './references.page';

@NgModule({
    declarations: [
        ReferencesPage
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', title: 'Acknowledgements', component: ReferencesPage }
        ])
    ],
    exports: [RouterModule]
})
export class ReferencesModule { }
