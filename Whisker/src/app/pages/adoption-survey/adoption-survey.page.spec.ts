import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdoptionSurveyPage } from './adoption-survey.page';

describe('AdoptionSurveyPage', () => {
  let component: AdoptionSurveyPage;
  let fixture: ComponentFixture<AdoptionSurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionSurveyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptionSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
