import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoSecondaryComponent } from './weather-info-secondary.component';

describe('WeatherInfoSecondaryComponent', () => {
  let component: WeatherInfoSecondaryComponent;
  let fixture: ComponentFixture<WeatherInfoSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInfoSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
