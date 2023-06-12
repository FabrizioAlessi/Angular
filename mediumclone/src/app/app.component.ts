import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser } from './store/actions/getCurrentUserAction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mediumclone';

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(getUser());
  }

}
