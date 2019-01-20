import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { 
    Router, NavigationStart, NavigationCancel, NavigationEnd 
} from '@angular/router';
import { MatIconRegistry } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'classpip-onboarding';

  constructor(
    private titleService: Title,
    public matIconRegistry: MatIconRegistry,
    private router: Router
  ) {
    matIconRegistry.registerFontClassAlias ('fab');
  }

  ngAfterViewInit() {

  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
