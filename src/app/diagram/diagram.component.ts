import { Component, OnInit } from '@angular/core';
import * as data from './data.json';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {
  DATA: any = (data as any).default

  ngOnInit(): void {

  }

}
