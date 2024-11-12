import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferentaoComponent } from './diferentao.component';

describe('DiferentaoComponent', () => {
  let component: DiferentaoComponent;
  let fixture: ComponentFixture<DiferentaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiferentaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiferentaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
