import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewBankPage } from './add-new-bank.page';

describe('AddNewBankPage', () => {
  let component: AddNewBankPage;
  let fixture: ComponentFixture<AddNewBankPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
