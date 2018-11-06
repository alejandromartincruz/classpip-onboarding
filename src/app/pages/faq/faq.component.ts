import { Component, OnInit } from '@angular/core';

import { HighlightService } from '../../shared/services/highlight.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

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
