import { AfterContentInit, Component, OnChanges } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MessageNotServiceService } from 'src/app/services/message-not-service.service';
import { ObserServiceService } from 'src/app/services/obser-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnChanges, AfterContentInit {
  SendMessage(message: string) {
    this.messageS.sendMessage(message);
  }
  showChilde: boolean = false;
  chag: boolean = false;
  ApiData: any[] = [];
  private unsubscribe = new Subject<void>();

  constructor(
    private obserServiceService: ObserServiceService,
    private messageS: MessageNotServiceService
  ) {
    console.log('Parent constructor here');
  }

  async ngOnInit() {
    console.log('Parent ngOnInit here');
    this.showChilde = true;
    this.obserServiceService
      .getDataObs()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((val: { title: string }[] = []) => {
        this.ApiData = val;
      });
  }
  log(val: any) {
    console.log(val);
  }
  OnClick() {
    //this.showChilde = !this.showChilde;
    this.chag = false;
  }

  ngOnChanges() {
    console.log('Parent ngOnChanges here');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck here');
  }

  ngAfterContentInit() {
    console.log('this is after content init parent');
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
