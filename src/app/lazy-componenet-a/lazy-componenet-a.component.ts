import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-componenet-a',
  templateUrl: './lazy-componenet-a.component.html',
  styleUrls: ['./lazy-componenet-a.component.css']
})
export class LazyComponenetAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


@NgModule({
  declarations: [
    LazyComponenetAComponent,
  ],
  imports: [
    CommonModule
  ],
})
export class LazyComponenetAModule {
}
