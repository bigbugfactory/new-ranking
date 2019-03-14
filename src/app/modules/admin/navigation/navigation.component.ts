import { Component, OnInit, Output } from '@angular/core';
import { AdminService } from '../../../core/services/admin.service';
import { FlashMessangerService } from 'src/app/core/services/flash-messanger.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output()
  
  arrayWithRankings;

  constructor(private adminService: AdminService,
              private flashMessanger:FlashMessangerService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  logout() {
    console.log(this.arrayWithRankings);
  }

  removingItem(event) {
    const id = event.srcElement.id ;
    this.adminService.removeItemFromMenu(id).subscribe(
      () => this.arrayWithRankings = this.arrayWithRankings.filter(
        (el) => el.id != id
      )
    );
  }

  show(event) {
    let id = this.activatedRoute.snapshot.params['ranking_id'];
    const idRanking = event.srcElement.id;

    this.adminService.showRanking(idRanking).subscribe(
      () => {
        // this.router.navigate(['/admin/view']);
      },
      () => this.flashMessanger.show('Coś poszło nie tak.'),
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
