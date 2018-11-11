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
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { FaqComponent } from './pages/faq/faq.component';
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
  { path: 'developer/git', component: GitComponent },
  { path: 'developer/tutorial', component: TutorialComponent },
  { path: 'developer/onboarding', component: OnboardingComponent },
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
