import { AbstractControl } from '@angular/forms';

export function MatchPassword(
  controlName: string,
  matchingControlName: string,
) {
  return (formGroup: AbstractControl) => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (!control || !matchingControl) {
      return null;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ matchPassword: true });
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  };
}
