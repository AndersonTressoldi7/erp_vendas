import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdvComponentComponent } from './pdv-component.component';

describe('PdvComponentComponent', () => {
  let component: PdvComponentComponent;
  let fixture: ComponentFixture<PdvComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdvComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdvComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
