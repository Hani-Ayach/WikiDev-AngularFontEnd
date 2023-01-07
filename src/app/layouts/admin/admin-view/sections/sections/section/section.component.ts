import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fadeFromLeft } from 'src/app/layouts/animation';
import *as fromApp from '../../../../../store/app.reducer';
import *as AdminActions from '../../../../admin-store/admin.action';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  animations:[fadeFromLeft]
})
export class SectionComponent implements OnInit {
@Input() section={} as any;
  constructor(private store:Store<fromApp.AppState>,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  OnEdit(){
    this.router.navigate(['edit',this.section.id],{relativeTo:this.route});
  }
  OnDelete(){
    this.store.dispatch(new AdminActions.RemoveSection(this.section.id));
  }
  OnDisplay(){
      this.router.navigate(['section', this.section.id],{relativeTo:this.route});
  }
}
