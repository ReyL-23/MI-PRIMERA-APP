import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bienvenidos } from './bienvenidos';

describe('Bienvenidos', () => {
  let component: Bienvenidos;
  let fixture: ComponentFixture<Bienvenidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bienvenidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bienvenidos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
