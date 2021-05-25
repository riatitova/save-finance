import { Component } from '@angular/core';
import { barChart, barChartData } from '../../models/barChartData';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  accounts: Array<string>;
  data: barChart;

  constructor() { 
    this.accounts = ['Cash', 'Card', 'Investition'];
    this.data = [...barChartData];
  }
 
}
