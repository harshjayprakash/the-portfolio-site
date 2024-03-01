import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPage } from './portfolio.page';

describe('Views Module > Portfolio Module > Portfolio Page', () => {
    let component: PortfolioPage;
    let fixture: ComponentFixture<PortfolioPage>;
    let compiledHTML: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PortfolioPage]
        }).compileComponents();

        fixture = TestBed.createComponent(PortfolioPage);
        component = fixture.componentInstance;
        compiledHTML = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create title', () => {
        expect(compiledHTML.querySelector('h1')?.textContent).toBe('Portfolio');
    });

    it('should create topic cards', () => {
        expect(compiledHTML.querySelector('article.fa-card>h2')?.textContent)
            .toBe('Fine Art Portfolio');
        expect(compiledHTML.querySelector('article.cs-card>h2')?.textContent)
            .toBe('Computer Science Portfolio');
    })
});
