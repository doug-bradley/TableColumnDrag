import { Component } from '@angular/core';
import { InvoiceLineFactory } from './models/invoice-lines';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'description', 'quantity', 'price', 'delete'];
  dataSource = new InvoiceLineFactory().getLines2();

  deleteItem(index: number) {
    this.dataSource = (index > -1) ? [
      ...this.dataSource.slice(0, index),
      ...this.dataSource.slice(index + 1)
    ] : this.dataSource;
  }
}
