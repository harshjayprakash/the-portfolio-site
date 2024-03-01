import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerSciencePage } from './computer-science.page';

describe('Views Module > Portfolio Module > Computer Science Module > Computer Science Page', () => {
    let component: ComputerSciencePage;
    let fixture: ComponentFixture<ComputerSciencePage>;
    let compiledHTML: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ComputerSciencePage]
        }).compileComponents();

        fixture = TestBed.createComponent(ComputerSciencePage);
        component = fixture.componentInstance;
        compiledHTML = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create title', () => {
        expect(compiledHTML.querySelector('h1')?.textContent).toBe('Computer Science Portfolio');
    });
});
