import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Location } from '@angular/common';
import { HighlightService } from '../../shared/services/highlight.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit, AfterViewChecked {

  highlighted: boolean = false;

  constructor(
    private highlightService: HighlightService,
    public location: Location
  ) { }

  ngOnInit() {
  }

  /**
   * Highlight blog post when it's ready
   */
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  goBack() {
    this.location.back();
  }

}
