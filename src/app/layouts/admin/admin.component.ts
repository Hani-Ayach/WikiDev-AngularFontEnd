import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.OnOpen();
  }
  OnOpen() {
    let sidebar = document.getElementById('sidebar')!.style;
    let mainSection = document.getElementById('mainSection')!.style;
    if (sidebar.marginLeft == '0px') {
      if (mainSection.width <= '842px') {
        sidebar.marginLeft = '-100%';
      } else sidebar.marginLeft = '-20%';
      mainSection.marginLeft = 'auto';
      mainSection.width = '100%';
    } else {
      sidebar.marginLeft = '0px';

      mainSection.marginLeft = '20%';
      mainSection.width = '80%';

      mainSection.paddingLeft = '0%';
    }
  }

}
