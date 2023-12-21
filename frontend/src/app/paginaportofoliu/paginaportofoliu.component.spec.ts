import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaportofoliuComponent } from './paginaportofoliu.component';

describe('PaginaportofoliuComponent', () => {
  let component: PaginaportofoliuComponent;
  let fixture: ComponentFixture<PaginaportofoliuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaportofoliuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaportofoliuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
