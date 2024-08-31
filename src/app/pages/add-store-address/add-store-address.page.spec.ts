import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddStoreAddressPage } from './add-store-address.page';

describe('AddStoreAddressPage', () => {
  let component: AddStoreAddressPage;
  let fixture: ComponentFixture<AddStoreAddressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStoreAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
