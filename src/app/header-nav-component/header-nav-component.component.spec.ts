import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavComponentComponent } from './header-nav-component.component';

describe('HeaderNavComponentComponent', () => {
  let component: HeaderNavComponentComponent;
  let fixture: ComponentFixture<HeaderNavComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNavComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
