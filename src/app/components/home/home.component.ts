import { Component, OnInit } from '@angular/core';

import { ItemInterface } from '../../models/item';
import { ItemService } from '../../services/item.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

	items: ItemInterface[];

  constructor(
  	private itemService: ItemService
  ) { }

  ngOnInit() {
  	this.allItems();
  }

  allItems(){
  	this.itemService.getAllItem().subscribe(items => this.items = items);
  }

}
