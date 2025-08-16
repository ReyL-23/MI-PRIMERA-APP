import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plataformas } from './plataformas';

describe('Plataformas', () => {
  let component: Plataformas;
  let fixture: ComponentFixture<Plataformas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plataformas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plataformas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
