import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesPage } from './references.page';

describe('Views Module > References Module > References Page', () => {
    let component: ReferencesPage;
    let fixture: ComponentFixture<ReferencesPage>;
    let compiledHTML: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ReferencesPage]
        }).compileComponents();

        fixture = TestBed.createComponent(ReferencesPage);
        component = fixture.componentInstance;
        compiledHTML = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create title', () => {
        expect(compiledHTML.querySelector('h1')?.textContent).toBe('Acknowledgements');
    });
});
