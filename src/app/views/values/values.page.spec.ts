import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesPage } from './values.page';

describe('Views Module > Values Module > Values Page', () => {
    let component: ValuesPage;
    let fixture: ComponentFixture<ValuesPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ValuesPage]
        }).compileComponents();

        fixture = TestBed.createComponent(ValuesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
