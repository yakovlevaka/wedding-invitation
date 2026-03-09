import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

export interface RSVP {
  name: string;
  attending: 'yes' | 'no' | 'maybe';
  message?: string;
}

@Component({
  selector: 'app-save-the-date',
  standalone: true,
  templateUrl: './save-the-date.component.html',
  styleUrls: ['./save-the-date.component.scss'],
  imports: [FormsModule, NgIf],
})
export class SaveTheDateComponent {
  readonly targetDate = new Date(2026, 7, 24); // 24 August 2026

  model: RSVP = {
    name: '',
    attending: 'yes',
    message: '',
  };

  submitted = false;

  get eventYear(): number {
    return this.targetDate.getFullYear();
  }

  onSubmit(): void {
    this.submitted = true;
    // In real app send model to backend here
    // console.log('RSVP submitted', this.model);
  }
}

