import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProviderPage } from './provider.page';

describe('ProviderPage', () => {
  let component: ProviderPage;
  let fixture: ComponentFixture<ProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
