2345678910 	

    import { Directive, Input, HostBinding } from '@angular/core';

    @Directive({
      selector: '[appGridItemTitle]'
    })
    export class GridItemTitleDirective {
      @HostBinding('style.font-size') @Input() appGridItemTitle = '0.5rem';
      @HostBinding('style.grid-area') area = 'title';
    }