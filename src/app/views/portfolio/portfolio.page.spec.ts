import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPage } from './portfolio.page';

describe('Views Module > Portfolio Module > Portfolio Page', () => {
    let component: PortfolioPage;
    let fixture: ComponentFixture<PortfolioPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PortfolioPage]
        }).compileComponents();

        fixture = TestBed.createComponent(PortfolioPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
