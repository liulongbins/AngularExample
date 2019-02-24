import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/class/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() list: Array<Menu>;
  constructor() {
  }

  ngOnInit() {
  }

}
