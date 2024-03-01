import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineArtComponent } from './fine-art.page';

describe('Views Module > Portfolio Module > Fine Art Module > Fine Art Page', () => {
    let component: FineArtComponent;
    let fixture: ComponentFixture<FineArtComponent>;
    let compiledHTML: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FineArtComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FineArtComponent);
        component = fixture.componentInstance;
        compiledHTML = fixture.nativeElement as HTMLElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create title', () => {
        expect(compiledHTML.querySelector('h1')?.textContent).toBe('Fine Art Portfolio');
    });
});
