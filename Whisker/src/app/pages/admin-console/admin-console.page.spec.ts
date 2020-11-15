import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminConsolePage } from './admin-console.page';

describe('AdminConsolePage', () => {
  let component: AdminConsolePage;
  let fixture: ComponentFixture<AdminConsolePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConsolePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminConsolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
