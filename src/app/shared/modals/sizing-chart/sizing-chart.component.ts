import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sizing-chart',
  templateUrl: './sizing-chart.component.html',
  styleUrls: ['./sizing-chart.component.css']
})
export class SizingChartComponent implements OnInit {

  constructor(
    public readonly modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.modalService.dismissAll();
  }

}
