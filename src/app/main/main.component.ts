import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToScantling()  {
    this.router.navigateByUrl('timber/scantling');
  }

  navigateToTimber()  {
    this.router.navigateByUrl('timber/planks');
  }

  navigateToScantlingOther()  {
    this.router.navigateByUrl('timber/scantling-other');
  }

}
