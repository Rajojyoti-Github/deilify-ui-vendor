import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceivedPaymentPage } from './received-payment.page';

describe('ReceivedPaymentPage', () => {
  let component: ReceivedPaymentPage;
  let fixture: ComponentFixture<ReceivedPaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
