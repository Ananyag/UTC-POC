import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiddeComponent } from './kidde.component';

describe('KiddeComponent', () => {
  let component: KiddeComponent;
  let fixture: ComponentFixture<KiddeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiddeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiddeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
