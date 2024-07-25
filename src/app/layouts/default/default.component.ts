import { Component } from '@angular/core';
import {HeaderComponent} from "../../widgets/header/header.component";

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.sass'
})
export class DefaultLayoutComponent {

}
