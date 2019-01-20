import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { DataCard } from '../../class/dataCard';
import { CARDS } from '../../data/basic_dev_videos';
import { Location } from '@angular/common';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  cards = CARDS;

  constructor(
  	public sanitizer: DomSanitizer,
  	public location: Location
  ) {}

  ngOnInit() {}

  drop(event: CdkDragDrop<DataCard[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

  goBack() {
    this.location.back();
  }

}
