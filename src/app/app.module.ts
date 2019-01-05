import { CommonComponent } from './common/common.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatSortModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  NativeDateAdapter,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatTooltipModule
} from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";

const materialModules = [
  CdkTableModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSortModule

];
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    EmployeeListComponent,
    CommonComponent,
    EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    materialModules,

    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
