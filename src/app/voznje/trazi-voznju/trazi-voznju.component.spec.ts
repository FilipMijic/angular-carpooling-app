import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraziVoznjuComponent } from './trazi-voznju.component';

describe('TraziVoznjuComponent', () => {
  let component: TraziVoznjuComponent;
  let fixture: ComponentFixture<TraziVoznjuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraziVoznjuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraziVoznjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
