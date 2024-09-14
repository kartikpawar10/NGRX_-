import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from 'src/app/models/counter.model';
import { customIncrement } from '../state/counter.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css'],
})
export class CounterInputComponent {
  value: number = 0;
  channelName?: string;
  form: FormGroup;
  counter: number = 0;
  constructor(
    private store: Store<{ counter: CounterState }>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.nonNullable.group({
      value: ['', [Validators.required, Validators.min(6)]],
    });
  }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.channelName = data.channelName;
    });
  }

  onAdd(): void {
    this.store.dispatch(customIncrement({ value: +this.value }));

    const inputValue = this.form.get('value')?.value;
    if (inputValue && !isNaN(Number(inputValue))) {
      this.counter += parseInt(inputValue, 10);
      this.form.reset();
    }
  }
}
