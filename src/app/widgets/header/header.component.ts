import { Component } from '@angular/core';
import {UpperCasePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    UpperCasePipe,
    RouterLink
  ],
  host: {
    class: 'contents'
  },
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  menuItems: { path: string; title: string }[] = [
    {
      title: 'Home',
      path: ''
    },
    {
      title: 'Catalog video',
      path: ''
    },
    {
      title: 'Download video',
      path: ''
    },
    {
      title: 'Book',
      path: ''
    },
  ]
}
