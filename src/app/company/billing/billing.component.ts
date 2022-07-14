import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  alert = false
  constructor() { }

  ngOnInit(): void {
  }

  onCheckPayment(event: any) {
    event.target.parentNode.parentNode.parentNode.querySelector('.active')?.classList.remove('active')
    event.target.parentNode.parentNode.classList.add('active')
  }

  onChangeDate(event: any) {
    console.log(event.target.value);
  }

}
