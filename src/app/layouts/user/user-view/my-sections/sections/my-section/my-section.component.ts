import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from 'src/app/layouts/Model/Section';

@Component({
  selector: 'app-my-section',
  templateUrl: './my-section.component.html',
  styleUrls: ['./my-section.component.css'],
})
export class MySectionComponent implements OnInit {
  @Input() section: Section = {} as any;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  OnDisplay() {
    this.router.navigate([this.router.url + '/section', this.section.id]);
  }
}
