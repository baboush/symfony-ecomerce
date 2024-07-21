import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthFieldInput } from '@app/shared/interfaces';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    @if (type()) {
      <div class="form-field" [formGroup]="formGroup()">
        <label class="form-field-label" for="{{ type().labelFor }}"
          >{{ type().labelFor }}
        </label>
        <input
          id="{{ type().inputId }}"
          class="form-field-input"
          type="{{ type().inputType }}"
          required
          formControlName="{{ type().formControlName }}"
        />
        @if (
          formGroup().controls[type().formControlName].invalid &&
          (formGroup().controls[type().formControlName].touched ||
            formGroup().controls[type().formControlName].dirty)
        ) {
          <div class="form-field-error">
            @if (
              formGroup().controls[type().formControlName].hasError('required')
            ) {
              <p class="form-field-error-message">Champ requis</p>
            }
            @if (
              formGroup().controls[type().formControlName].hasError('email') ||
              (formGroup().controls[type().formControlName].hasError(
                'pattern'
              ) &&
                type().formControlName == 'email')
            ) {
              <p class="form-field-error-message">
                Une adresse mail est attendue
              </p>
            }
            @if (
              formGroup().controls[type().formControlName].hasError('minlength')
            ) {
              <p class="form-field-error-message">
                Le {{ type().formControlName }} doit contenir au moins 8
                caractères
              </p>
            }
            @if (
              formGroup().controls[type().formControlName].hasError(
                'pattern'
              ) &&
              formGroup().controls[type().formControlName].value.length > 8 &&
              type().formControlName != 'email'
            ) {
              <p class="form-field-error-message">
                Un chiffre, un caractère spécial, une majuscule requie.
              </p>
            }
          </div>
        }
      </div>
    }
  `,
  styles: `
    :host {
      width: 100%;
      .form-field {
        font-family: 'Inter', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        padding: 0.5rem;
        margin: auto;
        position: relative;
        height: 7rem;

        &-label {
          font-size: 1rem;
          font-weight: 700;
          padding: 0.2rem;
          color: #808080;
        }
        &-input {
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          font-size: 1.5rem;
          padding: 0.5rem;
          width: 100%;
        }
        &-error {
          display: inline-block;
          gap: 0.5rem;
          padding: 0.5rem;
          position: absolute;
          bottom: 0px;

          &-message {
            font-size: 0.8rem;
            color: #ff0000;
          }
        }

        .ng-touched {
          border: 1px solid #skyblue;
        }
        .ng-invalid.ng-dirty.ng-touched {
          border: 1px solid #ff0000;
        }
        .ng-valid.ng-dirty {
          border: 1px solid #e0e0e0;
        }
      }
    }
  `,
})
export default class InputComponent {
  type = input<AuthFieldInput>({
    labelFor: '',
    inputId: '',
    inputType: '',
    formControlName: '',
  });
  formGroup = input<FormGroup>(new FormGroup({}));
}
