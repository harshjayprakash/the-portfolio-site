import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesPage } from './references.page';

describe('Views Module > References Module > References Page', () => {
    let component: ReferencesPage;
    let fixture: ComponentFixture<ReferencesPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ReferencesPage]
        }).compileComponents();

        fixture = TestBed.createComponent(ReferencesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
