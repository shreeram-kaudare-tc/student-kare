import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayout1 } from './auth-layout1';

describe('AuthLayout1', () => {
  let component: AuthLayout1;
  let fixture: ComponentFixture<AuthLayout1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLayout1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLayout1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
