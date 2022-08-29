import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sections=[{
    writer:"",
    dateOfPost:"",
    title:"Test One",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti numquam quaerat unde, eligendi modi sint nisi itaque inventore earum,illo natus, cupiditate neque voluptatem adipisci maxime nam cumque fugiat.",
    codeBlock:"",
    images:[]
  }]
}
