import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.less']
})
export class EditItemComponent implements OnInit {

	idItem: string;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router
  ) { }

  ngOnInit() {
  	this.idItem = this.route.snapshot.params['id'];
  }

}
