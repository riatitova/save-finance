import { LocalizedString } from '@angular/compiler';
import { Component } from '@angular/core';

interface IItem {
  selected: string;
  input: string;
}

interface IOptions {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent {
  item: IItem;
  options: IOptions[];

  constructor() {
    this.item = { selected: '', input: '' };
    this.options = [
      { id: 0, name: 'Accounts' },
      { id: 1, name: 'Income' },
      { id: 2, name: 'Category' },
      { id: 3, name: 'Goal' },
    ];
  }

  onSubmit() {
    localStorage.setItem('item', JSON.stringify(this.item));
  }
}
