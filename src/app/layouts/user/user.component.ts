import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import *as fromApp from '../store/app.reducer'
import *as UserActions from './user-store/user.action'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new UserActions.FetchSections())
  }
  OnOpen() {
    if (document.getElementById('sidebar')!.style.marginLeft == '0px') {
      if (document.getElementById('sidebar')!.style.width <= '842px')
        document.getElementById('sidebar')!.style.marginLeft = '-100%';
      else document.getElementById('sidebar')!.style.marginLeft = '-20%';

      document.getElementById('mainSection')!.style.marginLeft = 'auto';
      document.getElementById('mainSection')!.style.width = '100%';


      console.log('1');
    } else {
      document.getElementById('sidebar')!.style.marginLeft = '0px';

      document.getElementById('mainSection')!.style.marginLeft = '20%';
      document.getElementById('mainSection')!.style.width = '80%';

      document.getElementById('mainSection')!.style.paddingLeft='0%'

      console.log('0');
    }
  }
}
