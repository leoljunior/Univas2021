import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private url = 'https://calm-anchorage-20290.herokuapp.com/api/v1/bills'

  constructor(private httpService: HttpClient) { }


  readBill() : Observable<Bill[]> {
    return this.httpService.get<Bill[]>(this.url)
  }

  createBill(bill: Bill) : Observable<Bill> {
    return this.httpService.post<Bill>(this.url, bill)
  }

  deleteBill(id: number) : Observable<Bill> {
    return this.httpService.delete<Bill>(this.url + "/" + id)
  }


}
