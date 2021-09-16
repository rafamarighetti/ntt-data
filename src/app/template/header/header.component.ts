import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() term = new EventEmitter<any>();

  constructor(private route: Router) { }

  ngOnInit() {
  }

  searchHeader(term: string): any {
    this.term.emit(term);
    this.route.navigateByUrl('/movies');
  }

}
