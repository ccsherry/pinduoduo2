import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageSlider, Channel } from 'src/app/shared/components';
import { HomeService } from '../../services';
import { filter,map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) {}
  selectedTabLink$:Observable<string>;
  imageSliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  sub:Subscription;
  ngOnInit() {
    this.selectedTabLink$=this.route.paramMap.pipe(
      filter(params =>params.has('tabLink')),
      map(params =>params.get('tabLink'))
    );
    // .subscribe(tabLink => {
    //   console.log('路径参数: ', tabLink);
    //   this.selectedTabLink = tabLink;
    //   this.cd.markForCheck();
    // });
    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params);
    });
    this.imageSliders$ = this.service.getBanners();
  
    this.channels$ = this.service.getChannels();
  }
//如果不用async就需要清理
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
