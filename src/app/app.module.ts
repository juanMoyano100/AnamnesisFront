import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWorkComponent } from './add-work/add-work.component';
import { ListWorksComponent } from './list-works/list-works.component';
import { AddFamilyComponent } from './add-family/add-family.component';
import { ListFamilyComponent } from './list-family/list-family.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { PersonalHistoryComponent } from './personal-history/personal-history.component';
import { DiseasesAndDiagnosticComponent } from './diseases-and-diagnostic/diseases-and-diagnostic.component';
import { MedicRegisterComponent } from './medic-register/medic-register.component';
import { FillAnamnesisComponent } from './fill-anamnesis/fill-anamnesis.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbPaginationModule, NgbAlertModule,NgbProgressbarModule,NgbModule  } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddWorkComponent,
    ListWorksComponent,
    AddFamilyComponent,
    ListFamilyComponent,
    PersonalDataComponent,
    PersonalHistoryComponent,
    DiseasesAndDiagnosticComponent,
    MedicRegisterComponent,
    FillAnamnesisComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule,
    NgbProgressbarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
