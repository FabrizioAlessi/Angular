import { login } from './../../store/actions/loginActions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginReqInterface } from '../authTypes/loginReq.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formReg!: FormGroup;
  //creo gli observabler degli state dell'app che saranno inzializzati tramite i selector ngrx

  constructor(private formBuilder: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    this.formReg = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    //inzializzo l'appState globale
    this.intializeValues();
  }
  authentication() {
    const authRequest: LoginReqInterface = {
      user: this.formReg.value,
    };
    this.store.dispatch(login({ authRequest }));
  }
  intializeValues(): void {}
}
