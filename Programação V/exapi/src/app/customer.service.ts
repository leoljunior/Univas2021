import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'https://still-atoll-04584.herokuapp.com/customers'

  constructor(private httpService: HttpClient) { }

  readCustomer() : Observable<Customer[]> {
    return this.httpService.get<Customer[]>(this.url)
  }

  createCustomer(customer: Customer) : Observable<Customer> {
    return this.httpService.post<Customer>(this.url, customer)
  }

  deleteCustomer(id: number) : Observable<Customer> {
    return this.httpService.delete<Customer>(this.url + "/" + id)
  }

}
