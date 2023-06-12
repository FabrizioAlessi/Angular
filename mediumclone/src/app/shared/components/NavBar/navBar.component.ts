import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { currentUserInterface } from 'src/app/auth/authTypes/currentUser.interface';
import { GlobalStateInterface } from '../../types/globalState.interface';
import { Store, select } from '@ngrx/store';
import {
  currentUserSelector,
  isLoggedinSelector,
} from 'src/app/store/selectors/authSelectors';
import { AuthService } from 'src/app/auth/authServices/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css'],
})
export class NavBarComponent implements OnInit {
  isLoggedin$!: Observable<boolean>;
  currentUser$!: Observable<currentUserInterface | null>;

  constructor(private store: Store<GlobalStateInterface>,private authService:AuthService) {}

  ngOnInit(): void {
    this.isLoggedin$ = this.store.pipe(select(isLoggedinSelector)); //è undefined, bisogna capire perchè
    this.currentUser$ = this.store.pipe(select(currentUserSelector));

  }
  prova(){
    // this.isLoggedin$.subscribe((value) => {
    //   console.log(value)
    // })
    // const prova = this.store
    // prova.subscribe((value) => console.log(value))
    // this.authService.prova()

  }
}
