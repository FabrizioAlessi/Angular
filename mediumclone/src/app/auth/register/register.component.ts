import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { RegisterReqInterface } from '../authTypes/registerReq.interface';
import { register } from 'src/app/store/actions/registerActions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formReg!: FormGroup;
  //creo gli observabler degli state dell'app che saranno inzializzati tramite i selector ngrx

  constructor(private formBuilder: FormBuilder, private store:Store) {}
  ngOnInit(): void {
    this.formReg = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  registration() {
    const regRequest: RegisterReqInterface = {
      user: this.formReg.value
    }
    this.store.dispatch(register({regRequest}))
  }

}
