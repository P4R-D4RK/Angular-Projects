import { Component } from '@angular/core';
import { ChartData, ChartType, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Others',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100, 150],
        backgroundColor: ['#D487F5', '#9E6FDE', '#917DFA', '#6597FA'],
        hoverBackgroundColor: ['#A3A3A3', '#A3A3A3', '#A3A3A3', '#A3A3A3'],
        hoverBorderColor: ['#A3A3A3', '#A3A3A3', '#A3A3A3'],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
  opcionesGrafica: ChartConfiguration['options'] = {
    responsive: true,
  };
}
