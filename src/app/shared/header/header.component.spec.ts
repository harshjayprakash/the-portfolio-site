import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';

describe('Shared Module > Header Component', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let compiledHTML: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, FormsModule],
            declarations: [HeaderComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        compiledHTML = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it ('should not show menu', () => {
        expect(component.showMenu).toBeFalsy();
        if (compiledHTML.clientWidth < 800) {
            expect(compiledHTML.querySelector('nav')?.hidden).toBeFalse();
            (compiledHTML.querySelector('input.menu') as HTMLInputElement).click()
            expect(component.showMenu).toBeTrue();
        }
    });

    it('should render name', () => {
        expect(compiledHTML.querySelector('span.logo')?.textContent).toBe('Harsh.');
    });

    it('should get nav links', () => {
        expect(component.routes_).toBeTruthy();
    });

    it('should render nav links', () => {
        expect(compiledHTML.querySelector('a.nav-link')).toBeTruthy();
    });

    it('should render nav dot', () => {
        expect(compiledHTML.querySelector('span.nav-dot')?.textContent)
            .toBe(' ' + String.fromCharCode(9702) + ' ');
    })
});
