import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-commonconsiderations',
  templateUrl: './commonconsiderations.component.html',
  styleUrls: ['./commonconsiderations.component.scss']
})
export class CommonconsiderationsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
