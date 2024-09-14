import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from 'src/app/models/counter.model';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter: number = 0;
  counter$?: Observable<{ counter: number }>;
  constructor(private store: Store<{ counter: CounterState }>) {}
  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
}
