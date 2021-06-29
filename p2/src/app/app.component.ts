import { Component } from '@angular/core';
import { Bill } from './bill';
import { BillService } from './bill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listBills: Bill[]
  newBill: Bill = {} as Bill

  constructor(private billService: BillService) {}

  ngOnInit() {
    this.loadBill()
  }

  saveBill(myForm) {
    this.billService.createBill(this.newBill).subscribe(
      () => {
        myForm.reset()
        this.newBill = {} as Bill
        this.loadBill()
      }
    )
  }

  loadBill() {
   this.billService.readBill().subscribe(
    data => this.listBills = data
   )
 }

  deleteBill(billId: number) {
    return this.billService.deleteBill(billId).subscribe(
      () => this.loadBill()
    )
  }
}
