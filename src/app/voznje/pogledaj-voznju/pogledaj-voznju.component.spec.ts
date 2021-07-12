import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PogledajVoznjuComponent } from './pogledaj-voznju.component';

describe('PogledajVoznjuComponent', () => {
  let component: PogledajVoznjuComponent;
  let fixture: ComponentFixture<PogledajVoznjuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PogledajVoznjuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PogledajVoznjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
