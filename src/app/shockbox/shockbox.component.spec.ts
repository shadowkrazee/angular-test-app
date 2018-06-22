import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShockboxComponent } from './shockbox.component';

describe('ShockboxComponent', () => {
  let component: ShockboxComponent;
  let fixture: ComponentFixture<ShockboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShockboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShockboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
