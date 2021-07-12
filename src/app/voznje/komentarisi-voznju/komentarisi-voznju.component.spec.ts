import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomentarisiVoznjuComponent } from './komentarisi-voznju.component';

describe('KomentarisiVoznjuComponent', () => {
  let component: KomentarisiVoznjuComponent;
  let fixture: ComponentFixture<KomentarisiVoznjuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomentarisiVoznjuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomentarisiVoznjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
