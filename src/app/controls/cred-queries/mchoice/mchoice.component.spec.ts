import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MChoiceComponent } from './mchoice.component';

describe('MChoiceComponent', () => {
  let component: MChoiceComponent;
  let fixture: ComponentFixture<MChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
