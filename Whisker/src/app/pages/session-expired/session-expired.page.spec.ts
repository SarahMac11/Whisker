import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionExpiredPage } from './session-expired.page';

describe('SessionExpiredPage', () => {
  let component: SessionExpiredPage;
  let fixture: ComponentFixture<SessionExpiredPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionExpiredPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SessionExpiredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
