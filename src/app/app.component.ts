import { Component, AfterViewInit } from '@angular/core';
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
  loading;

  constructor(
    public matIconRegistry: MatIconRegistry,
    private router: Router
  ) {
    matIconRegistry.registerFontClassAlias ('fas');
    this.loading = true;
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if(event instanceof NavigationStart) {
          this.loading = true;
        }
        else if (
          event instanceof NavigationEnd || 
          event instanceof NavigationCancel
        ) {
          this.loading = false;
        }
      });
    }
}
