import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { WeaponsService } from 'src/app/services/weapons.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  constructor(private weapons:WeaponsService) { }

  ngOnInit(): void {
    this.createRadarChart(this.weapons.selected);
  }
  radar1: Chart;

  createRadar(){
  }

  createRadarChart(ardata) {
    var marksData = {
      labels: ['Power', 'Rate of Fire', 'Range', 'Capacity', 'Stability'],
      datasets: [
        {
          label: ardata?.display_name,
          backgroundColor: 'transparent',
          borderColor: 'rgba(200,0,0,0.6)',
          fill: false,
          radius: 6,
          pointRadius: 6,
          pointBorderWidth: 3,
          pointBackgroundColor: 'orange',
          pointBorderColor: 'rgba(200,0,0,0.6)',
          pointHoverRadius: 10,
          data: [
            ardata?.power,
            ardata?.rate_of_fire,
            ardata?.range,
            ardata?.capacity,
            ardata?.stability,
          ],
        },
      ],
    };

    this.radar1 = new Chart('myChart', {
      type: 'radar',
      data: marksData,
      options: {
        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20,
          },
          pointLabels: {
            fontSize: 18,
          },
        },
        legend: {
          position: 'left',
        },
      },
    });
  }

}
