import { AfterContentInit, Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnChanges, AfterContentInit {
  showChilde: boolean = false;
  chag: boolean = false;
  constructor() {
    console.log('Parent constructor here');
  }

  ngOnInit() {
    console.log('Parent ngOnInit here');
    this.showChilde = true;
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
}
