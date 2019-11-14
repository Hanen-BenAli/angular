import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinWordComponent } from './min-word.component';

describe('MinWordComponent', () => {
  let component: MinWordComponent;
  let fixture: ComponentFixture<MinWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
