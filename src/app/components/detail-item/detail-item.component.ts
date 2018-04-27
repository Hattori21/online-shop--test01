import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ItemInterface } from '../../models/item';
import { ItemService } from '../../services/item.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.less']
})
export class DetailItemComponent implements OnInit {

	idItem: string;
	idUserLogged: string;
	isItemOwner: boolean = false;

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
  	private itemService: ItemService,
  	private authService: AuthService,
  	private router: Router,
  	private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.onCheckUserLogged();
  	this.getItemDetails();
  }

  onCheckUserLogged(){
  	this.authService.getAuth().subscribe(user => {
  		if (user){
  			this.idUserLogged = user.uid;
  		}
  	})
  }

  getItemDetails(){
  	this.idItem = this.route.snapshot.params['id'];
  	this.itemService.getOneItem(this.idItem).subscribe(item => {
  		this.item = item;
  		if(this.idUserLogged == this.item.userId){
  			this.isItemOwner = true;
  		}
  	});
  }

  onClickDeleteItem(){
  	if(confirm('Are you sure?')){
  		this.itemService.deleteItem(this.item);
  		this.router.navigate(['/']);
  	}
  }

}
