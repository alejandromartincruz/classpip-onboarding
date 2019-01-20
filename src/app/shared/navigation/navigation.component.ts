import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { 
    Router, NavigationStart, NavigationCancel, NavigationEnd 
} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements AfterViewInit  {

  usersShow = false;
  loading: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 768px)')
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private titleService: Title,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
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

  openClose(identifier, caretId) {
  	identifier = !identifier;

  	var icon = document.getElementById(caretId);
  	if(identifier) {
  		icon.classList.add('open');
  	} else {
  		icon.classList.remove('open');
  	}

  	return identifier;
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
