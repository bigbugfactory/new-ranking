import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../../core/services/loader.service';
import { LoaderState } from '../../../core/services/loader.interface';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  private subscription:Subscription; 
  
  constructor(private loaderService:LoaderService) { }

  show = false;
  
  ngOnInit() {
    this.subscription = this.loaderService.loaderSubject
            .subscribe((state:LoaderState) => {
                this.show = state.show;
            });         
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
