import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HighlightService } from '../../shared/services/highlight.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

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

  tabSelectionChanged(event) {
    this.highlightService.highlightAll();
  }

  goBack() {
    this.location.back();
  }

}
