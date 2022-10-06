import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoMaterialDetailsComponent } from './curso-material-details.component';

describe('CursoMaterialDetailsComponent', () => {
  let component: CursoMaterialDetailsComponent;
  let fixture: ComponentFixture<CursoMaterialDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoMaterialDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoMaterialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
