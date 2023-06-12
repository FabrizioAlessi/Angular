import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable, map, of, tap } from 'rxjs';
import { MatchPasswordService } from './matchPassword.service';

export const matchPassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password?.value != confirmPassword?.value) {
    return { passwordMatchError: true };
  } else {
    return null;
  }
};

// export class MatchPasswordValidator {
//   static createValidator(
//     service: MatchPasswordService
//   ): AsyncValidatorFn {
//     return (control: AbstractControl): Observable<ValidationErrors | null> => {
//       const value1 = control.value;
//       const parent = control.parent
//       const value2 = parent!.get('confirmPassword')
//       //si
//       return service
//         .checkPassword(value1, value2!.value)
//         .pipe(
//           tap((result) => console.log(result, "result from validatoer")),
//           map((result: boolean) =>
//             result ? { passwordMatchError: true } : null
//           )
//         );
//     };
//   }
// }




