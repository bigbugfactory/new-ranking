import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AdminService } from '../../../core/services/admin.service';
import { LoaderService } from '../../../core/services/loader.service';
import { FlashMessangerService } from '../../../core/services/flash-messanger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-id',
  templateUrl: './select-id.component.html',
  styleUrls: ['./select-id.component.scss']
})
export class SelectIdComponent implements OnInit {

  idCurrentHeader: string;
  headersCurrentRank: string;
  selectedHeader: Object;
  success;

  message: string;

  show: boolean = false;

  constructor(private adminService: AdminService,
              private loader: LoaderService,
              private flashMessanger: FlashMessangerService,
              private router: Router ) {
    this.idCurrentHeader = this.adminService.currentRanking.body.id;
    this.headersCurrentRank = this.adminService.currentRanking.body.header;
   }

  ngOnInit() {
  }

  setId(event) {
    this.selectedHeader = {
      'id_column_name': event.target.value
    };
  }

  sendId() {
    this.adminService.sendId(this.selectedHeader, this.idCurrentHeader)
    .pipe(
      tap(() => this.loader.showNow())
    ).subscribe(success => {
      this.success = success;
      this.loader.hideNow();
      // this.message = "Ranking został przesłany. Pojawi się w menu.a"
      this.router.navigate(['/admin/success']);
    },
    () => {
      this.show = true;
      this.flashMessanger.show('Coś poszło nie tak.');
      setTimeout(() => {
        this.show = false;
      }, 4000);
    });
  }
}
