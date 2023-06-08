import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillocantionComponent } from './detaillocantion.component';

describe('DetaillocantionComponent', () => {
  let component: DetaillocantionComponent;
  let fixture: ComponentFixture<DetaillocantionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetaillocantionComponent]
    });
    fixture = TestBed.createComponent(DetaillocantionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
