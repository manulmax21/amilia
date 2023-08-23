import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoupupCompComponent } from './poupup-comp.component';

describe('PoupupCompComponent', () => {
  let component: PoupupCompComponent;
  let fixture: ComponentFixture<PoupupCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoupupCompComponent]
    });
    fixture = TestBed.createComponent(PoupupCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
