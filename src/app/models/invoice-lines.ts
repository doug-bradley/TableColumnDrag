export interface InvoiceLine {
    position: number;
    itemId: string;
    description: string;
    quantity: number;
    price: number;
  }
  export interface InvoiceLine2 {
    number: number;
    description: string;
    postedDate: string;
    quantity: number;
    uom: string;
    unitPrice: number;
    vat: string;
    amount: number;
  }
  const TABLE_DATA: InvoiceLine[] = [
    { position: 1, itemId: 'adfasdf', description: 'printer paper', quantity: 100, price: 12.95 },
    { position: 2, itemId: '345345', description: 'gel pens', quantity: 426, price: 3.95 },
    { position: 3, itemId: 'asdfe', description: 'mech. pencils', quantity: 641, price: 1.95 },
    { position: 4,  itemId: '34556',description: 'coffee 5lbs', quantity: 9, price: 42.65 },
    { position: 5, itemId: '89jdf', description: 'snack bars', quantity: 811, price: 0.95 },
    { position: 6, itemId: 'lkasjdf', description: 'lunch supplies', quantity: 12, price: 15.00 },
    { position: 7,  itemId: '908asdf',description: 'hand soap', quantity: 14, price: 1.95 },
    { position: 8,  itemId: '88asdf',description: 'dry markers', quantity: 15, price: 8.95 },
  ];
  const TABLE_DATA2: InvoiceLine2[] = [
    { number: 398598, description: 'COFFEE INST CLASSIC NESCAFE 1KG TIN', postedDate: '10/09/2019', quantity: 2.00, uom: 'UNIT', unitPrice: 299.99, vat: '15', amount: 599.98 }
    , { number: 880060, description: 'MILK UHT L/F 2% EVERFRESH 6X1L PACK', postedDate: '10/09/2019', quantity: 6.00, uom: 'UNIT', unitPrice: 79.99, vat: '0', amount: 479.94 }
    , { number: 880061, description: 'MILK UHT F/C EVERFRESH 6X1L PACK', postedDate: '10/09/2019', quantity: 8.00, uom: 'UNIT', unitPrice: 79.99, vat: '15', amount: 639.92 }
    , { number: 398066, description: 'TOILET ROLLS UNWRAPPED 1PLY 0174 TWINSAVER 485', postedDate: '10/09/2019', quantity: 2.00, uom: 'UNIT', unitPrice: 150.67, vat: '15', amount: 301.34 }
    , { number: 110117, description: 'JAM STRAWBERRY ALL GOLD 450G CAN', postedDate: '10/09/2019', quantity: 6.00, uom: 'UNIT', unitPrice: 23.99, vat: '15', amount: 143.94 }
    , { number: 991375, description: 'SERVIETTE 1PLY BLACK DINU 1000S BOX', postedDate: '10/09/2019', quantity: 1.00, uom: 'UNIT', unitPrice: 199.99, vat: '15', amount: 199.99 }
    , { number: 233488, description: 'AIR FRESHNER SECRET LAVENDER GLADE 180ML CAN', postedDate: '10/09/2019', quantity: 12.00, uom: 'UNIT', unitPrice: 14.99, vat: '15', amount: 173.88 }

  ];
  export class InvoiceLineFactory {
      getLines(): InvoiceLine[] {
        return TABLE_DATA;
      }
      getLines2(): InvoiceLine2[] {
        return TABLE_DATA2;
      }
  }