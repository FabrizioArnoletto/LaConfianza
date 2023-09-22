import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprendasComponent } from './listprendas.component';

describe('ListprendasComponent', () => {
  let component: ListprendasComponent;
  let fixture: ComponentFixture<ListprendasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListprendasComponent]
    });
    fixture = TestBed.createComponent(ListprendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
