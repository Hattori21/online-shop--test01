import { Injectable } from '@angular/core';

import { ItemInterface } from '../models/item';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {

	itemCollection: AngularFirestoreCollection<ItemInterface>;
	itemDoc: AngularFirestoreDocument<ItemInterface>;
	items: Observable<ItemInterface[]>;
	item: Observable<ItemInterface>;

  constructor(
  	private afs: AngularFirestore) {
  		this.itemCollection = this.afs.collection('items', ref => ref);
  	}

  addNewItem(item: ItemInterface){
  	this.itemCollection.add(item)
  }

  getAllItem():Observable<ItemInterface[]>{
  	this.items = this.itemCollection.snapshotChanges()
  	.map(changes => {
  		return changes.map(action => {
  			const data = action.payload.doc.data() as ItemInterface;
  			data.id = action.payload.doc.id;
  			return data;
  		});
  	});
  	return this.items;
  }

  getOneItem(idItem: string){
  	this.itemDoc = this.afs.doc<ItemInterface>(`items/${idItem}`);
  	this.item = this.itemDoc.snapshotChanges().map(action => {
  		if (action.payload.exists === false){
  			return null;
  		}else{
  			const data = action.payload.data() as ItemInterface;
  			data.id = action.payload.id;
  			return data;
  		}
  	});
  	return this.item;
  }

  updateItem(item: ItemInterface){
  	this.itemDoc = this.afs.doc(`items/${item.id}`);
  	this.itemDoc.update(item);
  }

  deleteItem(item: ItemInterface){
  	this.itemDoc = this.afs.doc(`items/${item.id}`);
  	this.itemDoc.delete();
  }

}
