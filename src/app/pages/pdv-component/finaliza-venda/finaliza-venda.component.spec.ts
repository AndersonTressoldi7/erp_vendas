import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizaVendaComponent } from './finaliza-venda.component';

describe('FinalizaVendaComponent', () => {
  let component: FinalizaVendaComponent;
  let fixture: ComponentFixture<FinalizaVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizaVendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
