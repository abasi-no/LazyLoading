import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyComponenetAComponent } from './lazy-componenet-a.component';

describe('LazyComponenetAComponent', () => {
  let component: LazyComponenetAComponent;
  let fixture: ComponentFixture<LazyComponenetAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyComponenetAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyComponenetAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
