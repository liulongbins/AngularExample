import { Component, OnInit, Input } from '@angular/core';
import { DropDown } from 'src/app/class/drop-down';
import { RealtimeMonitoringService } from 'src/app/services/vehicle-monitoring/realtime-monitoring/realtime-monitoring.service';
import { SearchParameterRealtimeMonitoring } from 'src/app/class/search-parameter-realtime-monitoring';

@Component({
  selector: 'app-realtime-monitoring',
  templateUrl: './realtime-monitoring.component.html',
  styleUrls: ['./realtime-monitoring.component.css']
})
export class RealtimemonitoringComponent implements OnInit {
  carTypes: Array<DropDown>;
  stores: Array<DropDown>;
  provinces: Array<DropDown>;
  citys: Array<DropDown>;
  tableList: Array<any>;
  tableHead: Array<any>;


  @Input()
  searchParameter: SearchParameterRealtimeMonitoring;
  constructor(private realtimeMonitoringService: RealtimeMonitoringService) {
    this.searchParameter = new SearchParameterRealtimeMonitoring();
    this.tableHead = [
      { nzShowCheckbox: 'true' },
      { name: '序号' },
      { name: 'VIN' },
      { name: '车牌号' },
      { name: '车辆型号' },
      { name: '车辆状态' },
      { name: '时间' },
      { name: '位置' },
      { name: '充电状态' },
      { name: '车速(km/h)' },
      { name: '累计里程' },
      { name: 'SOC(%)' },
    ];
  }

  ngOnInit() {
    // caryType
    this.realtimeMonitoringService.getCarTypeList().subscribe(caryTypes => this.carTypes = caryTypes);
    this.realtimeMonitoringService.getStores().subscribe(stores => this.stores = stores);
    this.realtimeMonitoringService.getProvinces().subscribe(provinces => this.provinces = provinces);
    this.realtimeMonitoringService.getCitys().subscribe(citys => this.citys = citys);
    this.realtimeMonitoringService.getTableList(this.searchParameter).subscribe(list => this.tableList = list);
  }

  // search
  search() {
    this.realtimeMonitoringService.getTableList(this.searchParameter).subscribe(list => this.tableList = list);
    console.log('searchParameter', this.searchParameter);
  }
  // reset
  reset() {
    this.searchParameter = new SearchParameterRealtimeMonitoring();
  }

}
