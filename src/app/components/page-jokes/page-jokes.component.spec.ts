import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJokesComponent } from './page-jokes.component';

describe('PageJokesComponent', () => {
  let component: PageJokesComponent;
  let fixture: ComponentFixture<PageJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
