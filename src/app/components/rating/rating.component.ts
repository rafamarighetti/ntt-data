import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  selectedValue: number = Number(localStorage.getItem('selectedValue')) || 0;
  stars: number[] = [1, 2, 3, 4, 5];
  constructor() { }
  ngOnInit() {
  }
  countStar(star: number) {
    this.selectedValue = star;
    localStorage.setItem('selectedValue', this.selectedValue.toString())
  }
}
