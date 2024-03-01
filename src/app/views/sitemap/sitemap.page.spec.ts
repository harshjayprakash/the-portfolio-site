import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemapPage } from './sitemap.page';

describe('Views Module > Sitemap Module > Sitemap Page', () => {
    let component: SitemapPage;
    let fixture: ComponentFixture<SitemapPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SitemapPage]
        }).compileComponents();

        fixture = TestBed.createComponent(SitemapPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
