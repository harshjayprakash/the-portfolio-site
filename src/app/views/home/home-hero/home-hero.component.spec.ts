import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroComponent } from './home-hero.component';

describe('Views Module > Home Module > Home Hero Component', () => {
    let component: HomeHeroComponent;
    let fixture: ComponentFixture<HomeHeroComponent>;
    let compiledHTML: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeHeroComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HomeHeroComponent);
        component = fixture.componentInstance;
        compiledHTML = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render full viewpoint', () => {
        expect(compiledHTML.clientHeight === window.innerHeight).toBeTrue();
    });

    it('should render title', () => {
        expect(compiledHTML.querySelector('h1.title')).toBeTruthy();
        expect(compiledHTML.querySelector('span.skill')?.textContent)
            .toBe('programming + art');
        expect(compiledHTML.querySelector('span.what')?.textContent)
            .toBe('brings it all together');
    });

    it('should render about description', () => {
        expect(compiledHTML.querySelector('p.about')?.textContent)
            .toContain('name is Harsh Jayprakash');
    });

    it('should render direction instruction', () => {
        expect(compiledHTML.querySelector('p.direction-arrow')?.textContent)
            .toContain(String.fromCharCode(8593));
    })
});
