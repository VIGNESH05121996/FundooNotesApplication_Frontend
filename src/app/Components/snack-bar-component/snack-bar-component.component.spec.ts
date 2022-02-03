import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarComponentComponent } from './snack-bar-component.component';

describe('SnackBarComponentComponent', () => {
  let component: SnackBarComponentComponent;
  let fixture: ComponentFixture<SnackBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
