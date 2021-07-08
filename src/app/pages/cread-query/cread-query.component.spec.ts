import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadQueryComponent } from './cread-query.component';

describe('CreadQueryComponent', () => {
  let component: CreadQueryComponent;
  let fixture: ComponentFixture<CreadQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreadQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
