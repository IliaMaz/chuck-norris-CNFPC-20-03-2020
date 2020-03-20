import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLangagueComponent } from './page-langague.component';

describe('PageLangagueComponent', () => {
  let component: PageLangagueComponent;
  let fixture: ComponentFixture<PageLangagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLangagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLangagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
