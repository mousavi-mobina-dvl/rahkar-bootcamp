import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorimComponent } from './lorim.component';

describe('LorimComponent', () => {
  let component: LorimComponent;
  let fixture: ComponentFixture<LorimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LorimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LorimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
