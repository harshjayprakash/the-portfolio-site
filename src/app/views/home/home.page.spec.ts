import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { HomeModule } from './home.module';

describe('Views Module > Home Module > Home Page', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let compiledHTML: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeModule],
            declarations: [HomePage],
        }).compileComponents();

        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        compiledHTML = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render hero', () => {
        expect(compiledHTML.querySelector('pf-home-hero')).toBeTruthy();
    })
});
