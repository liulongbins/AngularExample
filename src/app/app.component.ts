import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Menu } from './class/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TestTianze';
  menuList: Array<Menu>;
  constructor(private appService: AppService) { }

  getMenu() {
    return this.appService.getMenuList().subscribe(menu => this.menuList = menu);
  }

  ngOnInit() {
    this.getMenu();
  }

}
