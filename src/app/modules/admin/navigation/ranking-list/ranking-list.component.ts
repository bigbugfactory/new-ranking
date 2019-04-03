import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../../../../core/services/admin.service';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss']
})
export class RankingListComponent implements OnInit {

  @Input() arrayWithRankings;
  show: boolean = false;
  popup: string[];

  constructor(private adminService: AdminService) { }

  showPopup(item) {
    this.show = true;
    this.popup = item;
  }

  removingItem(id) {
    this.show = false;
      this.adminService.removeItemFromMenu(id).subscribe(
        () => {
          this.arrayWithRankings = this.arrayWithRankings.filter(
            (el) => el.id != id
          )
          console.log(this.arrayWithRankings);
        }
      )
    }

  ngOnInit() { }

}
