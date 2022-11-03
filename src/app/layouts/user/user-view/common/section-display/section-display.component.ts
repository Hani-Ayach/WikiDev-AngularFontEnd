import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Section } from 'src/app/layouts/Model/Section';
import * as fromApp from '../../../../store/app.reducer';
@Component({
  selector: 'app-section-display',
  templateUrl: './section-display.component.html',
  styleUrls: ['./section-display.component.css'],
})
export class SectionDisplayComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}
  id: number = 0;
  section?: Section = {} as any;
  userSubscribtion?: Subscription;
  ngOnInit(): void {
    this.userSubscribtion = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });

    if (this.id != 0) {
      this.store.select('user').subscribe((state) => {
        if (state.userSections.length == 0) {
          this.router.navigate(['../../'], { relativeTo: this.route });
          console.log('zero');
        }

        this.section = state.userSections.find((section) => {
          return section.id == this.id;
        });

      });
    }

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.userSubscribtion) this.userSubscribtion.unsubscribe();
  }
}
