import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNames } from './show-names';

describe('ShowNames', () => {
  let component: ShowNames;
  let fixture: ComponentFixture<ShowNames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowNames],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowNames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
