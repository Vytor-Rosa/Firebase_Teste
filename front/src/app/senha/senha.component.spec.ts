import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaComponent } from './senha.component';

describe('SenhaComponent', () => {
  let component: SenhaComponent;
  let fixture: ComponentFixture<SenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
