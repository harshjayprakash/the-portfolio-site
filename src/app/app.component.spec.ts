import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

describe('App Module > App Component', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let compiledHTML: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, SharedModule],
            declarations: [AppComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        compiledHTML = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render header', () => {
        expect(compiledHTML.querySelector('pf-header')).toBeTruthy();
    });

    it('should render footer', () => {
        expect(compiledHTML.querySelector('pf-footer')).toBeTruthy();
    });

    it('should render content', () => {
        expect(compiledHTML.querySelector('router-outlet')?.childNodes).toBeTruthy();
    });
});
