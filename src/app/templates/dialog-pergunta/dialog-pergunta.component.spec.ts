import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPerguntaComponent } from './dialog-pergunta.component';

describe('DialogPerguntaComponent', () => {
  let component: DialogPerguntaComponent;
  let fixture: ComponentFixture<DialogPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPerguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
