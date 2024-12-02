import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A2pageComponent } from './a2page.component';

describe('A2pageComponent', () => {
  let component: A2pageComponent;
  let fixture: ComponentFixture<A2pageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [A2pageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A2pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
