import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprendasComponent } from './editprendas.component';

describe('EditprendasComponent', () => {
  let component: EditprendasComponent;
  let fixture: ComponentFixture<EditprendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditprendasComponent]
    });
    fixture = TestBed.createComponent(EditprendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
