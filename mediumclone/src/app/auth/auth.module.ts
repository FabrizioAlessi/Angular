
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { RegEffect } from '../store/effects/registrationEffect';
import { LoginEffect } from '../store/effects/loginEffect';
import { AuthService } from './authServices/auth.service';
import { GetUserEffect } from '../store/effects/getUserEffect';
import { SettingsComponent } from './settings/settings.component';
import { updateEffect } from '../store/effects/updateUserEffect';
import { logOut } from '../store/actions/loginActions';
import { BannerModule } from '../shared/components/banner/banner.module';

import { MatchPasswordService } from '../shared/services/validators/matchPassword.service';


const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
@NgModule({
  declarations: [RegisterComponent, LoginComponent, SettingsComponent],
  providers: [AuthService, MatchPasswordService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature([RegEffect, LoginEffect, GetUserEffect,updateEffect]),
    BannerModule
  ],
})
export class AuthModule {}
