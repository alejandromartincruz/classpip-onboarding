import { Component, OnInit } from '@angular/core';

import { HighlightService } from '../../shared/services/highlight.service';

@Component({
  selector: 'app-firstrun',
  templateUrl: './firstrun.component.html',
  styleUrls: ['./firstrun.component.scss']
})
export class FirstrunComponent implements OnInit {

  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

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

}
