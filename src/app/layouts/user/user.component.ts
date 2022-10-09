import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  OnOpen() {
    if (document.getElementById('sidebar')!.style.marginLeft == '0px') {
      if (document.getElementById('sidebar')!.style.width <= '842px')
        document.getElementById('sidebar')!.style.marginLeft = '-100%';
      else document.getElementById('sidebar')!.style.marginLeft = '-20%';

      document.getElementById('mainSection')!.style.marginLeft = '0px';
      document.getElementById('mainSection')!.style.width = '100%';

      console.log('1');
    } else {
      document.getElementById('sidebar')!.style.marginLeft = '0px';

      document.getElementById('mainSection')!.style.marginLeft = '20%';
      document.getElementById('mainSection')!.style.width = '80%';

      console.log('0');
    }
  }
}
