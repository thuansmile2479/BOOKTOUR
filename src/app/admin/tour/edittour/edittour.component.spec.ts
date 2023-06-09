import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittourComponent } from './edittour.component';

describe('EdittourComponent', () => {
  let component: EdittourComponent;
  let fixture: ComponentFixture<EdittourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdittourComponent]
    });
    fixture = TestBed.createComponent(EdittourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
