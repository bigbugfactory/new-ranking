import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../core/services/admin.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { FlashMessangerService } from '../../../core/services/flash-messanger.service';

@Component({
  selector: 'app-create-ranking',
  templateUrl: './create-ranking.component.html',
  styleUrls: ['./create-ranking.component.scss']
})

export class CreateRankingComponent implements OnInit {

  counter = 0;

  allForm:Object;
  dataPuller:FormGroup;
  name:FormControl;
  desc:FormControl;
  type:FormControl;
  file:FormControl;

  constructor(private adminService:AdminService,
              private flashMessanger:FlashMessangerService) { 

    this.adminService.navigate = true;            

    this.name = new FormControl('', [Validators.required]);
    this.desc = new FormControl('', [Validators.required]);
    this.type = new FormControl('', [Validators.required]);
    this.file = new FormControl(null, Validators.compose([
                                        Validators.required, 
                                        CreateRankingComponent.checkExtension
                                      ]));

    this.dataPuller = new FormGroup({
      name: this.name,
      desc: this.desc,
      type: this.type,
      file: this.file
    });
  }

  sendForm() {
    this.allForm = {
      'name': this.dataPuller.value.name,
      'desc': this.dataPuller.value.desc,
      'type': this.dataPuller.value.type,
      'file': this.dataPuller.value.file
    }

    this.adminService.sendFirstPieceOfForm(this.allForm).subscribe(success => {
      this.flashMessanger.show(success ? 'poszło' : 'wróciło');
    });
  }

  static checkExtension(control: AbstractControl): {[key: string]: any} {
    const allowedExtensions = /\.(csv|xls|xlsx|xlm)$/i;
    if (!allowedExtensions.test(control.value)) {
      return {
        checkExtension: true
      }
    }
    return null
  }

  ngOnInit() {
      if (!this.adminService.token) this.flashMessanger.show('Coś poszło nie tak.');
  }



}
