import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropDown } from 'src/app/class/drop-down';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit {
  selected: string;
  @Input()
  get model() {
    return this.selected;
  }
  set model(val) {
    this.selected = val;
    this.modelChange.emit(this.selected);
  }
  @Output() modelChange = new EventEmitter();

  @Input() placeholder: string;
  @Input() list: Array<DropDown>;

  constructor() {
    this.list = [{ name: 'test1', id: '1' }, { name: 'test1', id: '1' }];
  }

  ngOnInit(): void {

  }

}
