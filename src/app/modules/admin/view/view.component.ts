import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, tap, finalize } from 'rxjs/operators';
import { RankingResponse } from 'src/app/core/services/ranking.interface';
import { LoaderService } from '../../../core/services/loader.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  ranking:RankingResponse;

  constructor(private adminService:AdminService,
              private activatedRoute:ActivatedRoute,
              private loader:LoaderService) {

    this.adminService.navigate = true;  
  }
  
  ngOnInit() {
    this.activatedRoute.params.pipe(
      tap(() => this.loader.showNow()),
      switchMap((params:Params) => this.adminService.checkRank(params['ranking_id'])),
    ).subscribe(
      (resp:RankingResponse) => {
        this.ranking = resp;
        this.loader.hideNow();
      }
    );
  }

}
