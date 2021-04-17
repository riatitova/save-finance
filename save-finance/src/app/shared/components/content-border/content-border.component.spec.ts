import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBorderComponent } from './content-border.component';

describe('ContentBorderComponent', () => {
  let component: ContentBorderComponent;
  let fixture: ComponentFixture<ContentBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
