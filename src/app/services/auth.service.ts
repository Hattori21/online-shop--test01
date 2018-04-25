import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(
  	public afAuth: AngularFireAuth
  	) { }

  // Register method
  registerUser(email: string, pass: string) {
  	return new Promise((resolve, reject) => {
  		this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
  		.then( userData => resolve(userData),
  		err => reject(err));
  	});
  }

  // Login method
  loginEmail(email: string, pass: string) {
  	return new Promise((resolve, reject) => {
  		this.afAuth.auth.signInWithEmailAndPassword(email, pass)
  		.then( userData => resolve(userData),
  		err => reject(err));
  	});
  }

  // Login with Google G+
  loginGoogle(){
     return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider() );
  }

  // Login with Facebook
  loginFacebook(){
     return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider() );
  }

  // Login with Twitter
  loginTwitter(){
     return this.afAuth.auth.signInWithPopup( new firebase.auth.TwitterAuthProvider() );
  }

  // Known if user is logged
  getAuth(){
  	return this.afAuth.authState.map ( auth => auth );
  }

  logOut(){
  	return this.afAuth.auth.signOut();
  }

}
