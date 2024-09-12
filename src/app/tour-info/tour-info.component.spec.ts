import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourInfoComponent } from './tour-info.component';

describe('TourInfoComponent', () => {
  let component: TourInfoComponent;
  let fixture: ComponentFixture<TourInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourInfoComponent]
    });
    fixture = TestBed.createComponent(TourInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
