import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../class/menu';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private menuUrl = 'api/menu';
  constructor(private http: HttpClient, private messageService: NzMessageService) { }

  getMenuList() {
    return this.http.get<any>(this.menuUrl).pipe(map(_ => {
      if (_.returnCode === '0' && _.status) {
        return _.returnValue;
        // this.messageService.success("getMenuList success")
      } else {
        this.messageService.error('getMenuList ' + _.returnMessage);
      }
    }), catchError(this.handleError('getMenuList')));
  }
  // Error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
