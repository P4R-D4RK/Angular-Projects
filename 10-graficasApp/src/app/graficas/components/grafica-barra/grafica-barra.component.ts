import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
 
  };

  public barChartType: ChartType = 'bar';
 
  public barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 75, 40 ], label: 'Series A', backgroundColor: '#5C6169', hoverBackgroundColor: 'green', hoverBorderColor: 'green', borderColor: 'gray' },
      { data: [ 32, 34, 40, 69, 86, 60, 80 ], label: 'Series B', backgroundColor: '#4186FA', hoverBackgroundColor: 'green', hoverBorderColor: 'green', borderColor: 'gray' },
      { data: [ 88, 48, 77, 45, 64, 37, 50 ], label: 'Series C', backgroundColor: '#293EE0', hoverBackgroundColor: 'green', hoverBorderColor: 'green', borderColor: 'gray' }
    ]
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
