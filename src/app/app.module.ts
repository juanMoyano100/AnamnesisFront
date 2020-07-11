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
import { PathologicalPersonalHistoryComponent } from './pathological-personal-history/pathological-personal-history.component';
import { NoPatoloicalPersonalHistoryComponent } from './no-patoloical-personal-history/no-patoloical-personal-history.component';
import { HousingConditionComponent } from './housing-condition/housing-condition.component';

@NgModule({
  declarations: [
    AppComponent,
    AddWorkComponent,
    ListWorksComponent,
    AddFamilyComponent,
    ListFamilyComponent,
    PathologicalPersonalHistoryComponent,
    NoPatoloicalPersonalHistoryComponent,
    HousingConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
