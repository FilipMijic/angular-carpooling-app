import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakazaneVoznjeComponent } from './zakazane-voznje.component';

describe('ZakazaneVoznjeComponent', () => {
  let component: ZakazaneVoznjeComponent;
  let fixture: ComponentFixture<ZakazaneVoznjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZakazaneVoznjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakazaneVoznjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
