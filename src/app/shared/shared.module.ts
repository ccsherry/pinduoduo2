    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormsModule } from '@angular/forms';
    import {
      ScrollableTabComponent,
      ImageSliderComponent,
      HorizentalGridComponent
    } from './components';
    import {
      GridItemDirective,
      GridItemImageDirective,
      GridItemTitleDirective
    } from './directives';

    @NgModule({
      declarations: [
        ScrollableTabComponent,
        ImageSliderComponent,
        HorizentalGridComponent,
        GridItemDirective,
        GridItemImageDirective,
        GridItemTitleDirective
      ],
      imports: [CommonModule, FormsModule],
      exports: [
        CommonModule,
        FormsModule,
        ScrollableTabComponent,
        ImageSliderComponent,
        HorizentalGridComponent,
        GridItemDirective,
        GridItemImageDirective,
        GridItemTitleDirective
      ]
    })
    export class SharedModule {}