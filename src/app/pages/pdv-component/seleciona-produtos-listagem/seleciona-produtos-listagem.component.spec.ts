import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaProdutosListagemComponent } from './seleciona-produtos-listagem.component';

describe('SelecionaProdutosListagemComponent', () => {
  let component: SelecionaProdutosListagemComponent;
  let fixture: ComponentFixture<SelecionaProdutosListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionaProdutosListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionaProdutosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
