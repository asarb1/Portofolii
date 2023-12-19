import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofoliiComponent } from './portofolii.component';

describe('PortofoliiComponent', () => {
  let component: PortofoliiComponent;
  let fixture: ComponentFixture<PortofoliiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofoliiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortofoliiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
