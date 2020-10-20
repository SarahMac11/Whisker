import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowsePetsPage } from './browse-pets.page';

describe('BrowsePetsPage', () => {
  let component: BrowsePetsPage;
  let fixture: ComponentFixture<BrowsePetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsePetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowsePetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
