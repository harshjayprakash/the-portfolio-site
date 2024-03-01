import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FineArtComponent } from './fine-art.page';

@NgModule({
    declarations: [
        FineArtComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', title: 'Fine Art Portfolio', component: FineArtComponent }
        ])
    ]
})
export class FineArtModule { }
