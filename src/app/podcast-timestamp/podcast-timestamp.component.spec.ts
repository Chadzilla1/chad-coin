import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastTimestampComponent } from './podcast-timestamp.component';

describe('PodcastTimestampComponent', () => {
  let component: PodcastTimestampComponent;
  let fixture: ComponentFixture<PodcastTimestampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastTimestampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
