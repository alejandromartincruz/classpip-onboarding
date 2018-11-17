import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
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
