import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItemInterface } from '../../models/item';

import { AuthService } from '../../services/auth.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.less']
})
export class AddItemComponent implements OnInit {

	item : ItemInterface = {
		id: '',
		title: '',
		description: '',
		specs: '',
		platform: '',
		publishDate: '',
		userId: '',
		userName: ''
	}

  constructor(
  	private authService: AuthService,
  	private itemService: ItemService,
  	private router: Router
  ) { }

  ngOnInit() {
  }

  onAddItem( {value}: {value: ItemInterface} ){
  	value.publishDate = (new Date()).getTime();
  	this.authService.getAuth().subscribe( user => {
  		value.userId = user.uid;
  		value.userName = user.displayName;
  		this.itemService.addNewItem(value);
  	});
  	this.router.navigate(['/']);
  	console.log(value);
  }

}
