import { Component } from '@angular/core';
import { Customer } from './cust/customer';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  customer = {} as Customer
  customers: Customer[]

  constructor(private customerService: CustomerService){}

  ngOnInit() {
    this.getCustomers()
  }

  getCustomers() {
    this.customerService.getCustomer().subscribe(data => this.customers = data)
    alert('fds')
  }

}
