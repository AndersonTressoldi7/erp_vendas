import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGeraParcelasCrediarioComponent } from './dialog-gera-parcelas-crediario.component';

describe('DialogGeraParcelasCrediarioComponent', () => {
  let component: DialogGeraParcelasCrediarioComponent;
  let fixture: ComponentFixture<DialogGeraParcelasCrediarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGeraParcelasCrediarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogGeraParcelasCrediarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
