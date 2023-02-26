import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() value!: boolean;
  counter: number = 0;
  interval: any;

  constructor() {
    console.log('Child constructor here');
  }

  ngOnInit() {
    console.log('Child ngOnInit here');
    // this.interval = setInterval(() => {
    //   console.log(this.counter);
    //   this.counter = this.counter + 1;
    // }, 1000);
  }
  ngOnDestroy() {
    console.log('Child ngOnDestroyed here');
    //clearInterval(this.interval);
  }
  ngOnChanges() {
    console.log('Child OnChanges here');
  }

  ngDoCheck() {
    console.log('Child ngDoCheck here');
  }

  ngAfterContentInit() {
    console.log('this is after content init Child');
  }
  ngAfterContentChecked() {
    console.log('this is ngAfterContentChecked Child');
  }

  ngAfterViewInit() {
    console.log('this is ngAfterViewInit Child');
  }
  ngAfterViewChecked() {
    console.log('this is ngAfterViewChecked Child');
  }
}
