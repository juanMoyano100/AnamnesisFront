import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkComponent } from './shared/model/work/work.component';
import { FamilyComponent } from './shared/model/family/family.component';
import { AddWorkComponent } from './add-work/add-work.component';
import { ListWorksComponent } from './list-works/list-works.component';
import { AddFamilyComponent } from './add-family/add-family.component';
import { ListFamilyComponent } from './list-family/list-family.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    FamilyComponent,
    AddWorkComponent,
    ListWorksComponent,
    AddFamilyComponent,
    ListFamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
