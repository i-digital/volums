import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOppsListPage } from './admin-opps.component';

describe('AdminOppsComponent', () => {
  let component: AdminOppsListPage;
  let fixture: ComponentFixture<AdminOppsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOppsListPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOppsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
