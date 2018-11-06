import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { FooterComponent } from './shared/footer/footer.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { StudentsComponent } from './pages/students/students.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { GitComponent } from './pages/git/git.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { FaqComponent } from './pages/faq/faq.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { PrivacyComponent } from './shared/privacy/privacy.component';
import { LegalwarningComponent } from './shared/legalwarning/legalwarning.component';
import { ServicesComponent } from './pages/tutorial/services/services.component';
import { DashboardComponent } from './pages/tutorial/dashboard/dashboard.component';
import { MobileComponent } from './pages/tutorial/mobile/mobile.component';
import { IntroductionComponent } from './pages/tutorial/introduction/introduction.component';
import { WindowsComponent } from './pages/faq/windows/windows.component';
import { LinuxComponent } from './pages/faq/linux/linux.component';
import { MacosComponent } from './pages/faq/macos/macos.component';
import { GeneralsComponent } from './pages/faq/generals/generals.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoadingComponent,
    HomeComponent,
    NotfoundComponent,
    NavigationComponent,
    StudentsComponent,
    TeachersComponent,
    AdministratorComponent,
    GitComponent,
    TutorialComponent,
    FaqComponent,
    OnboardingComponent,
    PrivacyComponent,
    LegalwarningComponent,
    ServicesComponent,
    DashboardComponent,
    MobileComponent,
    IntroductionComponent,
    WindowsComponent,
    LinuxComponent,
    MacosComponent,
    GeneralsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatProgressBarModule,
    AppRoutingModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
