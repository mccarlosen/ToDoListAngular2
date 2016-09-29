import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { dashboardRouting } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    dashboardRouting
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})

export class DashboardModule {}