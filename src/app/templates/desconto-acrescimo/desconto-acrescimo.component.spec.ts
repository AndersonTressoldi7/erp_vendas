import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescontoAcrescimoComponent } from './desconto-acrescimo.component';

describe('DescontoAcrescimoComponent', () => {
  let component: DescontoAcrescimoComponent;
  let fixture: ComponentFixture<DescontoAcrescimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescontoAcrescimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescontoAcrescimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
