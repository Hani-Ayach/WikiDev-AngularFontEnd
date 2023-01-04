import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fadeFromTop } from 'src/app/layouts/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeFromTop],
})
export class HomeComponent implements OnInit {
  searchCategory: any;
  showTopButton = false;
  constructor() {}

  ngOnInit(): void {
    //so important
    window.addEventListener('scroll', () => {
      this.showTopButton = window.pageYOffset > 550;
    });
  }

  // When the user clicks on the button, scroll to the top of the document
  TopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
