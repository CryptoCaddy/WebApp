import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseFormComponent } from 'app/modules/shared/components/base-form/base-form.component';
import { FirebaseError } from 'firebase/app';
import { finalize } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';

interface FormValue {
  email: string;
  password: string;
  passwordRepeat: string;
}

@Component({
  selector: 'cdy-auth-register-form',
  templateUrl: './auth-register-form.component.html',
  styleUrls: [ './auth-register-form.component.scss' ],
})
export class AuthRegisterFormComponent extends BaseFormComponent {

  constructor(private auth: AuthService) {
    super();
  }

  /** @memberof BaseFormComponent */
  public submit(): void {
    if (!this.canSubmit()) {
      return;
    }

    const formValue = this.form.value;

    this.pending.next(true);
    this.auth.signUp(formValue.email, formValue.password)
      .pipe(finalize(() => this.pending.next(false)))
      .subscribe(
        () => this.completed.next(true),
        (err) => this.setFormError(err),
      );
  }

  /** @memberof BaseFormComponent */
  protected initForm(): void {
    this.form = new FormGroup({
      'email': new FormControl(
        undefined,
        [ Validators.required ],
      ),
      'password': new FormControl(
        undefined,
        [ Validators.required ],
      ),
      'passwordRepeat': new FormControl(
        undefined,
        [ Validators.required ],
      ),
    });
  }

  /** set a global error on the form */
  private setFormError(err: FirebaseError) {
    this.form.setErrors({ generic: err.message });
  }

}
