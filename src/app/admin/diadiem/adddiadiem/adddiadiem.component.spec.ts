import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddiadiemComponent } from './adddiadiem.component';

describe('AdddiadiemComponent', () => {
  let component: AdddiadiemComponent;
  let fixture: ComponentFixture<AdddiadiemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddiadiemComponent]
    });
    fixture = TestBed.createComponent(AdddiadiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
