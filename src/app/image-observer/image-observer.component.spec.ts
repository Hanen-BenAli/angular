import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageObserverComponent } from './image-observer.component';

describe('ImageObserverComponent', () => {
  let component: ImageObserverComponent;
  let fixture: ComponentFixture<ImageObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
