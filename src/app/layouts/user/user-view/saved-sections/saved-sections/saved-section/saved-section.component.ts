import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Save } from 'src/app/layouts/Model/Save';
import { Section } from 'src/app/layouts/Model/Section';

import *as fromApp from '../../../../../store/app.reducer';
import *as UserActions from '../../../../user-store/user.action';

@Component({
  selector: 'app-saved-section',
  templateUrl: './saved-section.component.html',
  styleUrls: ['./saved-section.component.css']
})
export class SavedSectionComponent implements OnInit {
  @Input() section: Section = {} as any;
  constructor(private router: Router, private route: ActivatedRoute,private store:Store<fromApp.AppState>) {}

  ngOnInit(): void {}

  OnDisplay() {
    this.router.navigate(['section', this.section.id],{relativeTo:this.route});
  }
  OnDeleteFromSave(){
    this.store.dispatch(new UserActions.RemoveFromSave(new Save(0,'54d12ab5-35e6-44ac-bcd3-b09ea3600829',this.section.id)))
  }

}
