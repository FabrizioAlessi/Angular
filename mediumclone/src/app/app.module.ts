import { Router } from '@angular/router';
import { authReducer } from './store/reducers/authReducer';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavBarModule } from './shared/components/NavBar/navBar.module';
import { PersistenceService } from './shared/services/persistence.service';
import { Interceptor } from './shared/services/interceptor.service';
import { AuthService } from './auth/authServices/auth.service';
import { GetUserEffect } from './store/effects/getUserEffect';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { tagsReducer } from './shared/components/popularTags/store/reducers';
import { popularTagsEffect } from './shared/components/popularTags/store/effects';
import { HomeFeedModule } from './home/homeFeed.module';
import { articleReducer } from './article/store/reducers';

@NgModule({
  declarations: [AppComponent],
  providers: [
    PersistenceService,
    {
      //come fornire un interceptor, richiede un object con le seguenti proprietà
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
    AuthService,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ auth: authReducer, router: routerReducer, tags: tagsReducer, article:articleReducer,}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    EffectsModule.forRoot([GetUserEffect,popularTagsEffect]),
    HttpClientModule,
    NavBarModule,
    StoreRouterConnectingModule.forRoot(),
    HomeFeedModule,
  ],
})
export class AppModule {}
