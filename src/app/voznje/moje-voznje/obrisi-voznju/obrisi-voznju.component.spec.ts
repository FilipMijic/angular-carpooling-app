import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrisiVoznjuComponent } from './obrisi-voznju.component';

describe('ObrisiVoznjuComponent', () => {
  let component: ObrisiVoznjuComponent;
  let fixture: ComponentFixture<ObrisiVoznjuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObrisiVoznjuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObrisiVoznjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
