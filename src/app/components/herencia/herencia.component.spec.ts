import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerenciaComponent } from './herencia.component';

describe('HerenciaComponent', () => {
  let component: HerenciaComponent;
  let fixture: ComponentFixture<HerenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerenciaComponent]
    });
    fixture = TestBed.createComponent(HerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
