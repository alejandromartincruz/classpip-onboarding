import { Component, OnInit } from '@angular/core';

import { HighlightService } from '../../shared/services/highlight.service';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss']
})
export class InstallComponent implements OnInit {

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
