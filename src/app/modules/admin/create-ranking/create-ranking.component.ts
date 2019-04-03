import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AdminService } from '../../../core/services/admin.service';
import { FlashMessangerService } from '../../../core/services/flash-messanger.service';
import { LoaderService } from '../../../core/services/loader.service';

@Component({
  selector: 'app-create-ranking',
  templateUrl: './create-ranking.component.html',
  styleUrls: ['./create-ranking.component.scss']
})

export class CreateRankingComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;

  show: boolean = false;
  counter: number = 0;

  allForm: Object;
  dataPuller: FormGroup;
  name: FormControl;
  desc: FormControl;
  type: FormControl;
  file: FormControl;

  constructor(private adminService: AdminService,
              private flashMessanger: FlashMessangerService,
              private loader: LoaderService,
              private router: Router,
              private changeDet: ChangeDetectorRef) {

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

    const fd = new FormData;
    fd.append('name', this.dataPuller.value.name);
    fd.append('desc', this.dataPuller.value.desc);
    fd.append('type', this.dataPuller.value.type);
    fd.append('file', this.fileInput.nativeElement.files[0]);

    this.adminService.sendFirstPieceOfForm(fd).pipe(
      tap(() => this.loader.showNow())
    )
      .subscribe(
        () => {
          this.loader.hideNow(),
          this.router.navigate(['/admin/select-id'])
        }),
        () => {
          this.loader.hideNow();
          this.show = true;
          this.flashMessanger.show('Coś poszło nie tak.');
          setTimeout(() => {
            this.show = false;
          }, 4000);
      }
  }

  static checkExtension(control: AbstractControl): {[key: string]: any} {
    const allowedExtensions = /\.(csv|xls|xlsx|xlm)$/i;
    if (!allowedExtensions.test(control.value)) {
      return {
        checkExtension: true
      }
    }
    return null;
  }

  ngOnInit() {
      if (!this.adminService.token) {
        this.show = true;
        this.flashMessanger.show('Coś poszło nie tak.');
      }
  }

}
