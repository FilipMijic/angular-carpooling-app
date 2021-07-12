import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmeniVoznjuComponent } from './izmeni-voznju.component';

describe('IzmeniVoznjuComponent', () => {
  let component: IzmeniVoznjuComponent;
  let fixture: ComponentFixture<IzmeniVoznjuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniVoznjuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmeniVoznjuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
