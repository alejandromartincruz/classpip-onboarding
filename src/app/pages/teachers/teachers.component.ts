import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { DataCard } from '../../class/dataCard';
import { CARDS } from '../../data/teacher_videos';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})

export class TeachersComponent implements OnInit {

  cards = CARDS;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {}

  drop(event: CdkDragDrop<DataCard[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

}
