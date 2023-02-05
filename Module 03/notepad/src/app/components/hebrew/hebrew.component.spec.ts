import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HebrewComponent } from './hebrew.component';

describe('HebrewComponent', () => {
  let component: HebrewComponent;
  let fixture: ComponentFixture<HebrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HebrewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HebrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
