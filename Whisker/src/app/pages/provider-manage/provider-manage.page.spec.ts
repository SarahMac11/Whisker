import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProviderManagePage } from './provider-manage.page';

describe('ProviderManagePage', () => {
  let component: ProviderManagePage;
  let fixture: ComponentFixture<ProviderManagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderManagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProviderManagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
