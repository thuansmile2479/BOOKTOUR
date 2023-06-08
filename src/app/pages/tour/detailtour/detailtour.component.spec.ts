import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtourComponent } from './detailtour.component';

describe('DetailtourComponent', () => {
  let component: DetailtourComponent;
  let fixture: ComponentFixture<DetailtourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailtourComponent]
    });
    fixture = TestBed.createComponent(DetailtourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
