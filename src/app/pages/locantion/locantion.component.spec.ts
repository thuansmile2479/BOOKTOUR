import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocantionComponent } from './locantion.component';

describe('LocantionComponent', () => {
  let component: LocantionComponent;
  let fixture: ComponentFixture<LocantionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocantionComponent]
    });
    fixture = TestBed.createComponent(LocantionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
