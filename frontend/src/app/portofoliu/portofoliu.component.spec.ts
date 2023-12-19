import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofoliuComponent } from './portofoliu.component';

describe('PortofoliuComponent', () => {
  let component: PortofoliuComponent;
  let fixture: ComponentFixture<PortofoliuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofoliuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortofoliuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
