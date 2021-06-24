import { Component } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  customers: Customer[]
  newCustomer: Customer = {} as Customer

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.load()
  }

  save(myForm) {
    this.newCustomer.id = (new Date()).getTime()
    this.customerService.createCustomer(this.newCustomer).subscribe(
      data => {
        myForm.reset()
        this.newCustomer = {} as Customer
        this.load()
      }
    )
  }

  load() {
    this.customerService.readCustomer().subscribe(
      data => this.customers = data
    )
  }

  delete(customerId: number) {
    return this.customerService.deleteCustomer(customerId).subscribe(
      () => this.load()
    )
  }

}
