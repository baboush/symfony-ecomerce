import { Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldInput, UserCredentials } from '@app/shared/interfaces';
import InputComponent from './input.component';

@Component({
  selector: 'app-form-auth',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  template: `
    @if (formGroup()) {
      <form class="form-auth" [formGroup]="formGroup()" (ngSubmit)="onSubmit()">
        @for (input of userInput(); track input) {
          <app-input [type]="input" [formGroup]="formGroup()" />
        }
        <button
          type="submit"
          [disabled]="!formGroup().valid"
          class="form-auth-btn"
        >
          {{ actionForm() }}
        </button>
      </form>
    }
  `,
  styles: `
    :host {
      .form-auth {
        max-width: 30rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-btn {
          width: 100%;
          border-radius: 0.5rem;
          font-family: 'Inter', sans-serif;
          :hover {
            transform: scale(1.2);
            transition: 0.2s;
          }
        }
      }
    }
  `,
})
export default class FormAuthComponent {
  formGroup = input.required<FormGroup>();
  userInput = input.required<FieldInput[]>();
  actionForm = input.required<string>();
  userCredentials = output<UserCredentials>();

  onSubmit(): void {
    const user = {
      email: this.formGroup()?.value.email,
      password: this.formGroup()?.value.password,
    };
    this.userCredentials.emit(user);
  }
}
