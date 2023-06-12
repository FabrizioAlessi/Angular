import { currentUserInterface } from './../../auth/authTypes/currentUser.interface';
import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, filter, map } from 'rxjs';
import {
  dataProfileSelector,
  errorProfileSelector,
  onLoadingProfileSelector,
} from '../store/userProfileSelectors';
import { currentUserSelector } from 'src/app/store/selectors/authSelectors';
import { UserProfileInterface } from '../types/userProfile.interface';
import { getProfile } from '../store/userProfileActions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.css'],
})
export class UserProfileComponent implements OnInit {
  slug: string = '';
  //creo un observable<Boolean> per verificare se profile e currentUser siano uguali, dopo aver filtrato i valori null e undefined
  isCurrentUserProfile$ = combineLatest({
    currentUser: this.store
      .select(currentUserSelector)
      .pipe(
        filter((currentUser): currentUser is currentUserInterface =>
          Boolean(currentUser)
        )
      ),
    userProfile: this.store
      .select(dataProfileSelector)
      .pipe(
        filter((userProfile): userProfile is UserProfileInterface =>
          Boolean(userProfile)
        )
      ),
  }).pipe(
    map(({ currentUser, userProfile }) => {
      return currentUser.user?.username == userProfile.username;
    })
  );
  data$ = combineLatest({
    isLoading: this.store.select(onLoadingProfileSelector),
    error: this.store.select(errorProfileSelector),
    userProfile: this.store.select(dataProfileSelector),
    isCurrentUserProfile: this.isCurrentUserProfile$,
  });

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.fetchUserProfile();
    });
  }
  fetchUserProfile() {
    this.store.dispatch(getProfile({ slug: this.slug }));
  }
  getApiUrl() {
    //passo l'apiUrl a feedcomponent
    const isFavorites = this.router.url.includes('favorites'); //controllo se la route dell'app contiene favorites nell'url
    return isFavorites
    //passo questi API URL al feedComponent che si occuperà di fare la chiamata all'API in base a:
    //se true
      ? `/articles?favorited=${this.slug}`
    //se false
      : `/articles?author=${this.slug}`;
  }
}
