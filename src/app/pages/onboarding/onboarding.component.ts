import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { HighlightService } from '../../shared/services/highlight.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit, AfterViewChecked {

  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  /**
   * Highlight blog post when it's ready
   */
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit() {
  }

}
