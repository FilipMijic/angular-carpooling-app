import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtkaziVoznjuComponent } from './otkazi-voznju.component';

describe('OtkaziVoznjuComponent', () => {
  let component: OtkaziVoznjuComponent;
  let fixture: ComponentFixture<OtkaziVoznjuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtkaziVoznjuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtkaziVoznjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
