import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CashAndBankPage } from './cash-and-bank.page';

describe('CashAndBankPage', () => {
  let component: CashAndBankPage;
  let fixture: ComponentFixture<CashAndBankPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CashAndBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
