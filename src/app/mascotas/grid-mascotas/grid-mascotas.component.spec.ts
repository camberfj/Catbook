import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMascotasComponent } from './grid-mascotas.component';

describe('GridMascotasComponent', () => {
  let component: GridMascotasComponent;
  let fixture: ComponentFixture<GridMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridMascotasComponent]
    });
    fixture = TestBed.createComponent(GridMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
