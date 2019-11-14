import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbauchedComponent } from './embauched.component';

describe('EmbauchedComponent', () => {
  let component: EmbauchedComponent;
  let fixture: ComponentFixture<EmbauchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbauchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbauchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
