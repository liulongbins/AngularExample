import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DropDown } from 'src/app/class/drop-down';
import { SearchParameterRealtimeMonitoring } from 'src/app/class/search-parameter-realtime-monitoring';
import { map, tap, catchError } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RealtimeMonitoringService {
  searchUrl = 'api/tableList';
  carType = 'api/carType';
  citys = 'api/citys';
  provinces = 'api/provinces';
  stores = 'api/stores';

  constructor(private http: HttpClient, private messageService: NzMessageService) { }

  getTableList(data: SearchParameterRealtimeMonitoring): any {
    return this.http.get<any>(`${this.searchUrl}`).pipe(map(_ => {
      if (_.returnCode === '0' && _.status) {
        this.messageService.success('getTableList success');
        return _.returnValue;
      } else {
        this.messageService.error('getTableList ' + _.returnMessage);
      }
    }), catchError(this.handleError('getTableList')));
  }

  getCitys(): any {
    return this.http.get<any>(this.citys).pipe(map(_ => {
      if (_.returnCode === '0' && _.status) {
        return _.returnValue;
        // this.messageService.success("getCitys success")
      } else {
        this.messageService.error('getCitys ' + _.returnMessage);
      }
    }), catchError(this.handleError('getCitys')));
  }

  getProvinces(): any {
    return this.http.get<any>(this.provinces).pipe(map(_ => {
      if (_.returnCode === '0' && _.status) {
        return _.returnValue;
        // this.messageService.success("getProvinces success")
      } else {
        this.messageService.error('getProvinces ' + _.returnMessage);
      }
    }), catchError(this.handleError('getProvinces')));
  }

  getStores(): any {
    return this.http.get<any>(this.stores).pipe(map(_ => {
      if (_.returnCode === '0' && _.status) {
        return _.returnValue;
        // this.messageService.success("getStores success")
      } else {
        this.messageService.error('getStores ' + _.returnMessage);
      }
    }), catchError(this.handleError('getStores')));
  }

  getCarTypeList() {
    return this.http.get<any>(this.carType).pipe(map(_ => {
      if (_.returnCode === '0' && _.status) {
        return _.returnValue;
        // this.messageService.success("getCarTypeList success")
      } else {
        this.messageService.error('getCarTypeList ' + _.returnMessage);
      }
    }), catchError(this.handleError('getCarTypeList')));
  }

  // Error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


}
