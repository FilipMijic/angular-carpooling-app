import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreirajVoznjuComponent } from './kreiraj-voznju.component';

describe('KreirajVoznjuComponent', () => {
  let component: KreirajVoznjuComponent;
  let fixture: ComponentFixture<KreirajVoznjuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreirajVoznjuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreirajVoznjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
