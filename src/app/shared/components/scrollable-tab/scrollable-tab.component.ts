import { Component, OnInit, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';


export interface TopMenu {
  title:string;
  link:string;
  // 可选加？即可 link ?:string; readonly 只读
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit{
  selectedIndex = -1;
  title = 'pinduoduo2';
  //属性就是决定数据的
  @Input() menus:TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Output() tabSelected =new EventEmitter();

  constructor() {
    // console.log('组件构造调用');
  }

  ngOnInit() {
    // console.log('组件初始化');
  }

  handleSelection(index:number){
    this.selectedIndex=index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }
}
