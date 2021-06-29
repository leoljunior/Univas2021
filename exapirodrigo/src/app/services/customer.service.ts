import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../cust/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = 'https://still-atoll-04584.herokuapp.com/'

  constructor(private httpClient: HttpClient) { }

  getCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url + 'customers')
  }

}
