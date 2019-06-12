import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  name="Les capitales europeen";
  nbr=0;
  constructor() { }

  ngOnInit() {
  }

}
