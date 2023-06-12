import { MatchPasswordService } from './../../shared/services/validators/matchPassword.service';
import { Store, select } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup,
} from '@angular/forms';
import {
  backendErrorsSelector,
  currentUserSelector,
  isSubmittingUserSelector,
} from 'src/app/store/selectors/authSelectors';
import { Observable, Subscription, combineLatest, filter, map } from 'rxjs';
import { CurrentUserReqInterface } from 'src/app/shared/types/currentUserReq.interface';
import { updateUser } from 'src/app/store/actions/updateUserAction';
import { logOut } from 'src/app/store/actions/loginActions';
import { matchPassword } from 'src/app/shared/services/validators/matchPassword.validator';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  form = this.formBuilder.group({
    image: '',
    username: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
    bio: '',
  },
  {
    validators: matchPassword
  }
  );

  // form = new FormGroup({
  //   image: new FormControl(''),
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl('',{ validators: [MatchPasswordValidator.createValidator(this.matchPasswordService)] }),
  //   confirmPassword: new FormControl(''),
  //   bio: new FormControl(''),
  // })
  User?: any;
  data$ = combineLatest({
    isSubmitting: this.store.select(isSubmittingUserSelector),
    backendErrors: this.store.select(backendErrorsSelector),
  });

  currentUserSubscription?: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private matchPasswordService: MatchPasswordService
  ) {}
  ngOnDestroy(): void {
    this.currentUserSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.currentUserSubscription = this.store
      .pipe(
        select(currentUserSelector),
        filter(Boolean), //il parametro boolean filtra soltanto se il contenuto dell'observable è diverso da null o undefined
        map((currentUser) => currentUser.user)
      )
      .subscribe((currentUser) => {
        console.log(currentUser, 'current in settings');
        this.User = currentUser;
        this.initializeForm();
      });
  }
  initializeForm() {
    this.form.patchValue({
      image: this.User.image,
      email: this.User.email,
      username: this.User.username,
      bio: this.User.bio,
    });
  }
  submit() {
    const currentUserReq: CurrentUserReqInterface = {
      user: {
        ...this.User,
        ...this.form.getRawValue(),
      },
    };
    console.log('submit');
    this.store.dispatch(updateUser({ currentUserReq }));
  }
  logout() {
    console.log('logout');
    this.store.dispatch(logOut());
  }
}
