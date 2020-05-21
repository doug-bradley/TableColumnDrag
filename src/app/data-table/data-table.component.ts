import { Component, Input, OnInit } from '@angular/core';
import { InvoiceLine } from '../models/invoice-lines';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() tableData: InvoiceLine;
  columnData: string[];

  constructor(private dragulaService: DragulaService) { 
    dragulaService.createGroup("HEADERS", {
      direction: 'horizontal'
    })
  }

  ngOnInit(): void {
    this.columnData = ["Description","Quantity","Price","","","","",""];
    this.dragulaService
      .drag()
      .subscribe(value => {
        console.log('Dragging the ${ value[1].innerText }!');
      });

    this.dragulaService
      .drop()
      .subscribe(value => {
        console.log('Dropped the ${ value[1].innerText }!');

        setTimeout(() => {
          console.log('');
        }, 1000);
      });
  }
}
