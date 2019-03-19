import { Component, OnInit } from '@angular/core';
import { FlashMessangerService } from 'src/app/core/services/flash-messanger.service';
import { AdminService } from '../../../../core/services/admin.service';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss']
})
export class RankingListComponent implements OnInit {

  arrayWithRankings;

  constructor(private adminService: AdminService,
              private flashMessanger:FlashMessangerService) { }

  removingItem(event) {
    const id = event.srcElement.id ;
    this.adminService.removeItemFromMenu(id).subscribe(
      () => this.arrayWithRankings = this.arrayWithRankings.filter(
        (el) => el.id != id
      )
    );
  }

  ngOnInit() {
    this.adminService.getDataForNav()
    .subscribe(
      (resp) => {
        this.arrayWithRankings = resp;
      },
      () => this.flashMessanger.show('Coś poszło nie tak.'),
      );
  }

}
