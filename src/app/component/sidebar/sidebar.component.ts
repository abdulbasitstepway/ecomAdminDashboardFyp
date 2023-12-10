import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  configTurner:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  turner(){
    this.configTurner=!this.configTurner;
  }

}
