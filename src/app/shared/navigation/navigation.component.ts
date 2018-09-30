import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  usersShow = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}

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
  
}
