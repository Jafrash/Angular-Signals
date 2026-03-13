import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveName } from './remove-name';

describe('RemoveName', () => {
  let component: RemoveName;
  let fixture: ComponentFixture<RemoveName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveName],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoveName);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
