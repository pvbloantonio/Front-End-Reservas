import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReservasComponent } from './view-reservas.component';

describe('ViewReservasComponent', () => {
  let component: ViewReservasComponent;
  let fixture: ComponentFixture<ViewReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
