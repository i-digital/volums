import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVolsListPage } from './admin-vols.component';

describe('AdminVolsComponent', () => {
  let component: AdminVolsListPage;
  let fixture: ComponentFixture<AdminVolsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVolsListPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVolsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
