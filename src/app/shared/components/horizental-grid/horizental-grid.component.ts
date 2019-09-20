import { Component, OnInit } from '@angular/core';

export interface Channel {
  id: number;
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-horizental-grid',
  templateUrl: './horizental-grid.component.html',
  styleUrls: ['./horizental-grid.component.css']
})
export class HorizentalGridComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {}
}

