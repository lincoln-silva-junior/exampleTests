import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditButtonModalComponent } from './edit-button-modal.component';

describe('EditButtonModalComponent', () => {
  let component: EditButtonModalComponent;
  let fixture: ComponentFixture<EditButtonModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditButtonModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditButtonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
