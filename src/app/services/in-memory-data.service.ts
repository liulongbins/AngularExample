import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Menu } from '../class/menu';
import { DropDown } from '../class/drop-down';
import * as mock from '../mock/';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const menu = mock.menu;
    const carType = mock.carType;
    const stores = mock.stores;
    const provinces = mock.provinces;
    const citys = mock.citys;
    const tableList = mock.tableList;
    return { menu, carType, stores, provinces, citys, tableList };

  }
  // post response
  // genId(list: Array<any>): number {
  //   return list.length > 0 ? Math.max(...list.map(table => table.id)) + 1 : 11;
  // }
}
