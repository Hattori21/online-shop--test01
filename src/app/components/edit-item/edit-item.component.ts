import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ItemInterface } from '../../models/item';
import { ItemService } from '../../services/item.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.less']
})
export class EditItemComponent implements OnInit {

	idItem: string;

  item: ItemInterface = {
    id: '',
    description: '',
    specs: '',
    platform: '',
    publishDate: '',
    userId: '',
    userName: ''
  }

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
    private itemService: ItemService
  ) { }

  ngOnInit() {
  	this.getItemDetails();
  }

  getItemDetails(){
    this.idItem = this.route.snapshot.params['id'];
    this.itemService.getOneItem(this.idItem).subscribe(item => this.item = item);
  }

  onEditItem({value}:{value: ItemInterface}){
    value.id = this.idItem;
    this.itemService.updateItem(value);
    this.router.navigate(['/detail-item/'+this.idItem]);
  }

}
