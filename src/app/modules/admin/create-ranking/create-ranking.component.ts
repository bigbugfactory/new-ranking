import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { AdminService } from '../../../core/services/Admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ranking',
  templateUrl: './create-ranking.component.html',
  styleUrls: ['./create-ranking.component.scss']
})

export class CreateRankingComponent implements OnInit {

  token:any;
  counter = 0;
  dataPuller:FormGroup;
  name:FormControl;
  desc:FormControl;
  type:FormControl;
  file:FormControl;

  constructor(private adminService:AdminService,
              private changeDetector:ChangeDetectorRef) { 

    this.name = new FormControl('', [Validators.required]);
    this.desc = new FormControl('', [Validators.required]);
    this.type = new FormControl('', [Validators.required]);
    this.file = new FormControl(null, [Validators.required]);

    this.dataPuller = new FormGroup({
      name: this.name,
      desc: this.desc,
      type: this.type,
      file: this.file
    });
  }

  consola() { 
    console.log(this.dataPuller);
  }

  ngOnInit() {
      this.token = localStorage.setItem('token', JSON.stringify(this.token));
      // console.log(this.token);
  }



}
