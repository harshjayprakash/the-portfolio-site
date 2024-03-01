import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemapPage } from './sitemap.page';

describe('Views Module > Sitemap Module > Sitemap Page', () => {
    let component: SitemapPage;
    let fixture: ComponentFixture<SitemapPage>;
    let compiledHTML: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SitemapPage]
        }).compileComponents();

        fixture = TestBed.createComponent(SitemapPage);
        component = fixture.componentInstance;
        compiledHTML = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create title', () => {
        expect(compiledHTML.querySelector('h1')?.textContent).toBe('Sitemap');
    });
});
