import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';
import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TimerService } from './timer.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TimerComponent,
        TaskBoardComponent
      ],
      providers: [ { provide: TimerService, useValue: { countSecond: () => {} } } ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Pandora'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Pandora');
  }));
  it('should render title in a header tag', async(() => {
    const timerService = TestBed.get(TimerService);
    spyOn(timerService, 'countSecond')
      .and.returnValue(of(1));

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header').textContent).toContain('Pandora');
  }));
});
