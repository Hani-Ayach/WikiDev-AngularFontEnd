import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fadeFromLeft } from 'src/app/layouts/animation';
import { Section } from 'src/app/layouts/Model/Section';
import *as fromApp from '../../../../../store/app.reducer';
import *as UserActions from '../../../../user-store/user.action';
@Component({
  selector: 'app-my-section',
  templateUrl: './my-section.component.html',
  styleUrls: ['./my-section.component.css'],
  animations:[fadeFromLeft]
})
export class MySectionComponent implements OnInit {
  @Input() section: Section = {} as any;
  constructor(private router: Router, private route: ActivatedRoute,private store:Store<fromApp.AppState>) {}

  ngOnInit(): void {}

  OnDisplay() {
    this.router.navigate(['section', this.section.id],{relativeTo:this.route});
  }

  OnEdit(){
    this.router.navigate(['edit',this.section.id],{relativeTo:this.route});
  }
  OnDelete(){
    this.store.dispatch(new UserActions.RemoveSection(this.section.id))
  }
}
