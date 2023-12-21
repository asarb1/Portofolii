import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaportofoliiComponent } from './paginaportofolii.component';

describe('PaginaportofoliiComponent', () => {
  let component: PaginaportofoliiComponent;
  let fixture: ComponentFixture<PaginaportofoliiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaportofoliiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaportofoliiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
