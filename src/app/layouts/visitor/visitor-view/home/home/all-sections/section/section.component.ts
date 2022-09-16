import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/layouts/visitor/Model/Category';
import { Section } from 'src/app/layouts/visitor/Model/Section';
import { SectionComment } from 'src/app/layouts/visitor/Model/SectionComment';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() { }

@Input() section:Section ={} as any;
comments:SectionComment[]=[];
category:Category={} as any;

  ngOnInit(): void {
    this.comments=this.section.comments;
    this.category=this.section.category;
    console.log(this.category);
  }


}
