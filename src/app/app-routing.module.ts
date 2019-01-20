import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { InstallComponent } from './pages/install/install.component';
import { FirstrunComponent } from './pages/firstrun/firstrun.component';
import { GitComponent } from './pages/git/git.component';
import { TutorialesComponent } from './pages/tutoriales/tutoriales.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PrivacyComponent } from './shared/privacy/privacy.component';
import { LegalwarningComponent } from './shared/legalwarning/legalwarning.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user/students', component: StudentsComponent },
  { path: 'user/teachers', component: TeachersComponent },
  { path: 'user/administrator', component: AdministratorComponent },
  { path: 'developer/install', component: InstallComponent },
  { path: 'developer/firstrun', component: FirstrunComponent },
  { path: 'developer/tutoriales', component: TutorialesComponent },
  { path: 'developer/tutoriales/basicos', component: BasicosComponent },
  { path: 'developer/tutoriales/git', component: GitComponent },
  { path: 'developer/tutoriales/mesa', component: TutorialComponent },
  { path: 'developer/tutoriales/onboarding', component: OnboardingComponent },
  { path: 'developer/projects', component: ProjectsComponent },
  { path: 'developer/faq', component: FaqComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'legalwarning', component: LegalwarningComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
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
