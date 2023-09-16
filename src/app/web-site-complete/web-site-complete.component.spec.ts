import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSiteCompleteComponent } from './web-site-complete.component';

describe('WebSiteCompleteComponent', () => {
  let component: WebSiteCompleteComponent;
  let fixture: ComponentFixture<WebSiteCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebSiteCompleteComponent]
    });
    fixture = TestBed.createComponent(WebSiteCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
