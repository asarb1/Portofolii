import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditareportofoliuComponent } from './editareportofoliu.component';

describe('EditareportofoliuComponent', () => {
  let component: EditareportofoliuComponent;
  let fixture: ComponentFixture<EditareportofoliuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditareportofoliuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditareportofoliuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
