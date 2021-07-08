import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MChoiceItemComponent } from './mchoice-item.component';

describe('MChoiceItemComponent', () => {
  let component: MChoiceItemComponent;
  let fixture: ComponentFixture<MChoiceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MChoiceItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MChoiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
