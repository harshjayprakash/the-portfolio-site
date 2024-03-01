import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('Shared Module > Footer Component', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;
    let compiledHTML: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FooterComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        compiledHTML = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should retrieve year', () => {
        expect(component.copyrightYear).toBe((new Date()).getFullYear().toString());
    });

    it(`should render 'under construction' text`, () => {
        expect(compiledHTML.querySelector('p.under-construction')?.textContent)
            .toContain('Under Construction');
    });

    it(`should render copyright text`, () => {
        expect(compiledHTML.querySelector('p.copyright')?.textContent)
            .toContain('Harsh Jayprakash');
    });

    it(`should render divider`, () => {
        expect(compiledHTML.querySelector('hr')).toBeDefined();
    });

    it('should render link labels', () => {
        expect(compiledHTML.querySelector('a.button-label')).toBeTruthy();
    });

});
