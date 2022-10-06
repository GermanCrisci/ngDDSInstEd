import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoMaterialAddComponent } from './curso-material-add.component';

describe('CursoMaterialAddComponent', () => {
  let component: CursoMaterialAddComponent;
  let fixture: ComponentFixture<CursoMaterialAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoMaterialAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoMaterialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
