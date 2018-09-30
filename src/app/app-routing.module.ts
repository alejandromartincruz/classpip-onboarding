import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { GitComponent } from './pages/git/git.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { FaqComponent } from './pages/faq/faq.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'administrator', component: AdministratorComponent },
  { path: 'git', component: GitComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'faq', component: FaqComponent },
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
