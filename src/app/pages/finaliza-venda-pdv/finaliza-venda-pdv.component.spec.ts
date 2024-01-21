import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizaVendaPdvComponent } from './finaliza-venda-pdv.component';

describe('FinalizaVendaPdvComponent', () => {
  let component: FinalizaVendaPdvComponent;
  let fixture: ComponentFixture<FinalizaVendaPdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizaVendaPdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizaVendaPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
