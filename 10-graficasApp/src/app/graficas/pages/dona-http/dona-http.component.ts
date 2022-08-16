import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color, ChartConfiguration } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    /*this.graficasService.getUsuariosRS().subscribe((data) => {
      const labels = Object.keys(data);
      const values = Object.values(data);
      
      this.doughnutChartData = {
        labels:Object.keys(data),
        datasets:[{
          data:Object.values(data),
          backgroundColor: ['#4867AA', '#FF0000', '#43E660', '#AB33F2', '#D84764'],
          hoverBackgroundColor: ['#A3A3A3', '#A3A3A3', '#A3A3A3', '#A3A3A3'],
          hoverBorderColor: ['#A3A3A3', '#A3A3A3', '#A3A3A3'],
        }]
      }
    });*/

    this.graficasService
      .getUsuariosRSDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData = {
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: [
                '#4867AA',
                '#FF0000',
                '#43E660',
                '#AB33F2',
                '#D84764',
              ],
              hoverBackgroundColor: [
                '#A3A3A3',
                '#A3A3A3',
                '#A3A3A3',
                '#A3A3A3',
              ],
              hoverBorderColor: ['#A3A3A3', '#A3A3A3', '#A3A3A3'],
            },
          ],
        };
      });
  }

  public doughnutChartLabels: string[] = [
    /*'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Others',*/
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
  opcionesGrafica: ChartConfiguration['options'] = {
    responsive: true,
  };
}
