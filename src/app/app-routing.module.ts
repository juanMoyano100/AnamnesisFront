import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddWorkComponent } from './add-work/add-work.component';
import { ListWorksComponent } from './list-works/list-works.component';
import { AddFamilyComponent } from './add-family/add-family.component';
import { ListFamilyComponent } from './list-family/list-family.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { FillAnamnesisComponent } from './fill-anamnesis/fill-anamnesis.component';


const routes: Routes = [
  {path: 'addWork', component:AddWorkComponent},
  {path: 'listWorks', component:ListWorksComponent},
  {path: 'addFamily', component:AddFamilyComponent},
  {path: 'listFamily', component:ListFamilyComponent},
  {path: 'personalData', component:PersonalDataComponent},
  {path: '', component:FillAnamnesisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
