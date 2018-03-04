import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';

import { TimerService } from './timer.service';
import { TaskBoardComponent } from './task-board/task-board.component';
import { NewTaskComponent } from './new-task/new-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TaskBoardComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
