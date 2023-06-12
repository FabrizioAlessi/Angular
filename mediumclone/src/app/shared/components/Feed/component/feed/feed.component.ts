import { filter } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeed } from '../../store/actions/getFeedActions';
import { Observable, Subscription, map, tap } from 'rxjs';

import {
  dataFeedSelector,
  errorFeedSelector,
  isLoadingSelector,
} from '../../store/selectors';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import queryString from 'query-string';
import { FeedResponseInterface } from '../../Types/feedResponse.interface';
//query-string è una library per manipolare le query url

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input('apiUrl') apiUrlFeed!: string;
  feedContent$!: Observable<FeedResponseInterface | null>; //qua bisogna sistemare questo type che dovrebbe essere feedResponseInterface
  feedError$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;
  limit = environment.limit;
  baseUrl!: string; //variabile per il base url senza i query selector
  queryParamsSubscription!: Subscription;
  currentPage!: number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {} //NOTA activatedRoute fornisce informazioni riguardo le route associate a un component

  ngOnChanges(changes: SimpleChanges): void {
    //apiUrlFeed è l'input, quando c'è un cambiamento, fa il fetch del feed
    const isApiUrlChanged =
      !changes['apiUrlFeed'].firstChange &&
      changes['apiUrlFeed'].currentValue !==
        changes['apiUrlFeed'].previousValue;
    if (isApiUrlChanged) {
      this.fetchFeed();
    }
  }

  ngOnDestroy(): void {
    //RICORDA, quando fai una subscription, DEVI sempre fare l'unsubscribe. Questo non serve se si usa async pipe
    this.queryParamsSubscription.unsubscribe;
  }
  ngOnInit(): void {
    this.initializeValues();
    this.intializeListener();
  }

  fetchFeed() {
    const offset = this.currentPage * this.limit - this.limit; //calcola l'offset sulla base della page di pagination
    //ES PAG2 => 2*20 (LIMIT) -LIMIT = 20
    //LIBRARY QUERY-STRING
    //converto in stringa l'url + queryparams (che sono limit e offset)
    const parsedUrl = queryString.parseUrl(this.apiUrlFeed);
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query, //... SPREAD OPERATOR
    });
    const apiUrlPlusParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeed({ url: apiUrlPlusParams })); //dispatch di getFeed -> EFFECT-> SERVICE CON CHIAMATA GET ALL'API
    //aggiungerà al nostro stato la risposta dell'API => in initalizeValues andrò ad aggiornare gli observable con le risposte dell'API
  }
  initializeValues() {
    this.feedContent$ = this.store.pipe(select(dataFeedSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.baseUrl = this.router.url.split('?')[0]; //inizializzo il base url prendendo l'url intero della pagina e usando split prendo il primo elemento dell'array
    //OVVERO l'url di base, COSì ESCLUDO I QUERYPARAMS
    //NOTA: baseUrl cambierà in base al component in cui ci troviamo
  }
  intializeListener() {
    //IMPORTANTE: questo intializer prende i query params (che cambiano a ogni click di pagination: VEDI PAGINATION.TS) e
    //rilancia il fetchFeed (ovvero la function per popolare il feed: VEDI fetchFeed())
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = +params['page'] || 1; //converte il parametro page in number o gli assegna 1
        this.fetchFeed();
      }
    );
  }

  // filterFeed(feed: Array<any>, col: number) {
  //   switch (col) {
  //     case 1:
  //       return feed.filter((f, index) => index % 3 === 0);
  //     case 2:
  //       return feed.filter((f, index) => index % 3 === 1);
  //     case 3:
  //       return feed.filter((f, index) => index % 3 === 2);
  //     default:
  //       return [];
  //   }
  // }
}
