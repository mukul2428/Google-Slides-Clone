import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesNumberComponent } from './slides-number.component';

describe('SlidesNumberComponent', () => {
  let component: SlidesNumberComponent;
  let fixture: ComponentFixture<SlidesNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidesNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
