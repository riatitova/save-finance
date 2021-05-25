import { Component } from '@angular/core';
import { barChartIncome, barChartIncomeData } from 'src/app/models/barChartData';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent {

  data: barChartIncome;
  
  constructor() {
    this.data = [...barChartIncomeData];
  }


}
