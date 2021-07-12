import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeVoznjeComponent } from './moje-voznje.component';

describe('MojeVoznjeComponent', () => {
  let component: MojeVoznjeComponent;
  let fixture: ComponentFixture<MojeVoznjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojeVoznjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojeVoznjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
