import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home/home.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AboutModule } from './about/about.module';
import { SitemapModule } from './sitemap/sitemap.module';
import { ValuesModule } from './values/values.module';
import { ReferencesModule } from './references/references.module';

export const ROUTES: Routes = [
    { path: '', title: 'Home', loadChildren: () => HomeModule },
    { path: 'portfolio', title: 'Portfolio', loadChildren: () => PortfolioModule },
    { path: 'about', title: 'About', loadChildren: () => AboutModule },
    { path: 'sitemap', title: 'Sitemap', loadChildren: () => SitemapModule },
    { path: 'values', title: 'Values', loadChildren: () => ValuesModule },
    { path: 'references', title: 'Acknowledgements',
        loadChildren: () => ReferencesModule },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
    ],
    exports: [RouterModule]
})
export class ViewsModule { }
