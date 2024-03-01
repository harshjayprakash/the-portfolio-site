import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesPage } from './values.page';

describe('Views Module > Values Module > Values Page', () => {
    let component: ValuesPage;
    let fixture: ComponentFixture<ValuesPage>;
    let compiledHTML: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ValuesPage]
        }).compileComponents();

        fixture = TestBed.createComponent(ValuesPage);
        component = fixture.componentInstance;
        compiledHTML = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create title', () => {
        expect(compiledHTML.querySelector('h1')?.textContent).toBe('Values');
    });
});
