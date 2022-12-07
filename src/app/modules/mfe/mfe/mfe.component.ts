import {Component, Inject, OnInit, Optional} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {EventBusService} from '../models/event-bus.service';

@Component({
  selector: 'mfe',
  templateUrl: './mfe.component.html',
  styleUrls: ['./mfe.component.less']
})
export class MfeComponent implements OnInit {
  notesCount$!: Observable<number>;
  notesCountSubject$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(@Optional() @Inject('GLOBAL_EVENT_BUS') private pluginEventBus: EventBusService) {
  }

  ngOnInit(): void {
    this.notesCount$ = this.notesCountSubject$;
    this.pluginEventBus?.addEventListener('NotesCountUpdate', (event: MessageEvent) => {
      this.notesCountSubject$.next(event.data.payload.count);
    });
    this.notesCountSubject$.next(this.getAllNotes()?.length);
  }

  private getAllNotes(): Array<any> {
    let existingNotes: Array<any>;
    const existingNotesString: string | null = window.localStorage.getItem('my_notes');
    if (!existingNotesString) {
      existingNotes = [];
    } else {
      existingNotes = JSON.parse(existingNotesString);
    }
    return existingNotes;
  }

}
