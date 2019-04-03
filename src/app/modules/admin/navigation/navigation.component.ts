import { Component, OnInit, Input } from '@angular/core';
import { FlashMessangerService } from '../../../core/services/flash-messanger.service';
import { AdminService } from '../../../core/services/admin.service';
import { RankingResponse } from '../../../shared/model/ranking.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  show: boolean = false;

  public arrayWithRankings: RankingResponse;

  constructor(private adminService: AdminService,
              private flashMessanger: FlashMessangerService) { }

  ngOnInit() {
    this.adminService.getDataForNav()
    .subscribe(
      (resp) => {
        this.arrayWithRankings = resp;
        console.log(this.arrayWithRankings);
      },
      () => {
        this.show = true;
        this.flashMessanger.show('Coś poszło nie tak.');
        setTimeout(() => {
          this.show = false;
        }, 4000);
      }
      );
    }

}
