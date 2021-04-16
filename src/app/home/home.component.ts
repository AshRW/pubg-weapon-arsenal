import { Component, OnInit } from '@angular/core';
import { WeaponsService } from '../services/weapons.service';
import { Chart } from 'chart.js';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private weapons:WeaponsService) { }

  ngOnInit(): void {
  }
  attachments = new FormGroup({
    muzzle:new FormControl(''),
    sight:new FormControl(''),
    stock:new FormControl(''),
    mag:new FormControl(''),
    foregrip:new FormControl('')
  })
  radar1: Chart;
  public selected_weapon_type:any=[];
  public selected_weapon:any;
  public display_weapon_type:any;
  public gun_attachments:any;
  public available_list:any;
  public available_list_muzzle:any;
  getAR(){
    this.selected_weapon_type=this.weapons.getAR();
    // console.log(this.selected_weapon_type)
    this.display_weapon_type="Assault Rifle";
  }
  getSMG(){
    this.selected_weapon_type=this.weapons.getSMG();
    this.display_weapon_type="SMG";
  }
  getDMR(){
    this.selected_weapon_type=this.weapons.getDMR();
    this.display_weapon_type="DMR";
  }
  getSniper(){
    this.selected_weapon_type=this.weapons.getSniper();
    this.display_weapon_type="Bolt Action Sniper Rifle";
  }
  getShot(){
    this.selected_weapon_type=this.weapons.getShotgun();
    this.display_weapon_type="Shotgun";
  }
  getLMG(){
    this.selected_weapon_type=this.weapons.getLMG();
    this.display_weapon_type="LMG";
  }
  selected(index:any){
    this.selected_weapon=this.selected_weapon_type[index];
    this.weapons.selected=this.selected_weapon_type[index];
    this.createRadarChart(this.selected_weapon);
    // this.loadAttachments();
    // console.log(this.selected_weapon);
  }
  loadAttachments(){
    let temp:any;
    // selected gun type logic here
    // for now ar only
    if(this.display_weapon_type=="Assault Rifle"){
      temp=this.weapons.getArAttachments();
      this.gun_attachments=temp[this.selected_weapon.name];
      console.log(this.gun_attachments);
      this.available_list=this.gun_attachments.available;
    }
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
          pointHoverRadius: 20,
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
            max: 90,
            stepSize: 20,
          },
          // pointLabels: {
          //   fontSize: 10,
          // },
        },
        legend: {
          position: 'left',
        },
      },
    });
  }

}
