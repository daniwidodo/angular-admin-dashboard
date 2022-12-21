import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLogoComponent } from './navigation-logo.component';

describe('NavigationLogoComponent', () => {
  let component: NavigationLogoComponent;
  let fixture: ComponentFixture<NavigationLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
