import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  @Input() defaultClass;
  @Input() headers = [{title: '', width: '', sort: '', colValue : ''}];
  @Input() dataList = [];
  @Input() showSorting = false;
  constructor() { }

  ngOnInit(): void {
  }
}
