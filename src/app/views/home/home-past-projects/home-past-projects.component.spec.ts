import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePastProjectsComponent } from './home-past-projects.component';

describe('HomePastProjectsComponent', () => {
    let component: HomePastProjectsComponent;
    let fixture: ComponentFixture<HomePastProjectsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomePastProjectsComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(HomePastProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
