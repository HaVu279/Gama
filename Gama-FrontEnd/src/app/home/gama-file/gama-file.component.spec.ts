import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamaFileComponent } from './gama-file.component';

describe('GamaFileComponent', () => {
  let component: GamaFileComponent;
  let fixture: ComponentFixture<GamaFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamaFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamaFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
