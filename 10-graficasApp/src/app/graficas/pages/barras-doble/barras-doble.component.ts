import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [],
})
export class BarrasDobleComponent {
  proveedoresLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];

  productosOpciones: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'y', //Esto hace que sea horizontal el gráfico
  };

  proveedoresData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: [
      {
        data: [100, 200, 150, 400, 362],
        label: 'Vendedor A',
        backgroundColor: '#5C6169',
        hoverBackgroundColor: 'green',
        hoverBorderColor: 'gray',
        borderColor: 'gray',
      },
      {
        data: [347, 250, 100, 450, 200],
        label: 'Vendedor B',
        backgroundColor: '#86C7F3',
        hoverBackgroundColor: 'green',
        hoverBorderColor: 'gray',
        borderColor: 'gray',
      },
    ],
  };

  productosData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: [
      {
        data: [200, 300, 400, 300, 100],
        label: 'Carros',
        backgroundColor: '#50FF5F',
        hoverBackgroundColor: 'gray',
        hoverBorderColor: 'gray',
        borderColor: 'gray',
      },
    ],
  };
}
