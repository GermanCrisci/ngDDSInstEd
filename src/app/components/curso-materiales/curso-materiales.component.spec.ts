import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoMaterialesComponent } from './curso-materiales.component';

describe('CursoMaterialesComponent', () => {
  let component: CursoMaterialesComponent;
  let fixture: ComponentFixture<CursoMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoMaterialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
