import { Component, Input } from '@angular/core';
import { barChart } from '../../models/barChartData';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  @Input()
  barChartData: barChart = [];

  view: [number, number] = [400, 150];

  showYAxis: boolean = true;
  gradient: boolean = false;
  showDataLabel: boolean = true;

  colorScheme = {
    domain: [
      '#a8385d',
      '#7aa3e5',
      '#a27ea8',
      '#aae3f5',
      '#adcded',
      '#a95963',
      '#8796c0',
      '#7ed3ed',
      '#50abcc',
      '#ad6886',
    ],
  };

  constructor() {
    Object.assign( this.barChartData );
  }
}
