import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { ComponentsModule } from './components/components.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RealtimemonitoringComponent } from './pages/vehicle-monitoring/realtime-monitoring/realtime-monitoring.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'vehiclemonitoring',
    data: { breadcrumb: '车辆监控' },
    children: [
      { path: 'realtimemonitoring', component: RealtimemonitoringComponent, data: { breadcrumb: '车辆实时监控' } }
    ]
  },
  { path: '**', component: ErrorpageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [RealtimemonitoringComponent]
})
export class AppRoutingModule { }
