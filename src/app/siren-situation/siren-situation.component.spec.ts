import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SirenSituationComponent } from './siren-situation.component';

describe('SirenSituationComponent', () => {
  let component: SirenSituationComponent;
  let fixture: ComponentFixture<SirenSituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SirenSituationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SirenSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
