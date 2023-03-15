import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { MessageNotServiceService } from 'src/app/services/message-not-service.service';
import { ObserServiceService } from 'src/app/services/obser-service.service';
import { ChildComponent } from '../child/child.component';

import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    const obsServiceSpy = jasmine.createSpyObj<ObserServiceService>([
      'getDataObs',
    ]);
    obsServiceSpy.getDataObs.and.returnValue(
      of([
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: 'fugiat veniam minus',
          completed: false,
        },
      ])
    );
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ParentComponent, ChildComponent],
      providers: [
        {
          provide: ObserServiceService,
          useValue: obsServiceSpy,
        },
        MessageNotServiceService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));
});
