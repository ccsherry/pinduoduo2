import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';


export interface ImageSlider {
  imgUrl:string;
  link:string;
  caption:string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit,OnDestroy {
  @Input() sliders:ImageSlider[]=[];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds=2;
  selectedIndex=0;
  intervalId;

  constructor(private rd2:Renderer2) { }

  @ViewChild('imageSlider',{static:true}) imgSlider:ElementRef;
  ngOnInit() {
    console.log('ngOnInit',this.imgSlider);
    // this.imgSlider.nativeElement.innerHTML=`<span>hello</span>`;
  }

  ngAfterViewInit(): void {
    let i=0;
    this.intervalId=setInterval(()=>{
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        ((this.getIndex(++this.selectedIndex)) * 
        this.imgSlider.nativeElement.scrollWidth)/
        this.sliders.length);

    },this.intervalBySeconds*1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex(idx:number):number{
    return idx >=0 ? idx % this.sliders.length
    :this.sliders.length - (Math.abs(idx)%this.sliders.length);
  }

  handleScroll(ev){
    const ratio=
    (ev.target.scrollLeft*this.sliders.length)/ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }

}
