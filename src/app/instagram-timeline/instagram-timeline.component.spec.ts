import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramTimelineComponent } from './instagram-timeline.component';

describe('InstagramTimelineComponent', () => {
  let component: InstagramTimelineComponent;
  let fixture: ComponentFixture<InstagramTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
