import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaObserver,MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, OnDestroy {
  title = 'Welcome to Yodam platform';
  mediaSub: Subscription = new Subscription;
  deviceXs: boolean = false;

  constructor(public mediaObserver:MediaObserver){}

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    });

  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
