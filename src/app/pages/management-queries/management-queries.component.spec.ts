import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementQueriesComponent } from './management-queries.component';

describe('ManagementQueriesComponent', () => {
  let component: ManagementQueriesComponent;
  let fixture: ComponentFixture<ManagementQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
