import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPage } from './about.page';

describe('Views Module > About Module > About Page', () => {
    let component: AboutPage;
    let fixture: ComponentFixture<AboutPage>;
    let compiledHTML: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AboutPage],
        }).compileComponents();

        fixture = TestBed.createComponent(AboutPage);
        component = fixture.componentInstance;
        compiledHTML = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
