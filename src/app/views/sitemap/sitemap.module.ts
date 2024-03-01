import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SitemapPage } from './sitemap.page';

@NgModule({
    declarations: [
        SitemapPage
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', title: 'Sitemap', component: SitemapPage }])
    ],
    exports: [RouterModule]
})
export class SitemapModule { }
