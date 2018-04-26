import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

	public email: string;
	public password: string;

  constructor(
  	public authService: AuthService,
  	public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
  	this.authService.loginEmail(this.email, this.password)
  	.then((res) => {
      this.flashMessage.show('Logged in!', 
      {cssClass: 'alert-success', timout: 4000});
  		this.router.navigate(['/members']);
  		//console.log(res);
  	}).catch((err) => {
  		//console.log(err);
      this.flashMessage.show(err.message, 
      {cssClass: 'alert-danger', timout: 4000});
  	});
  }

  // Login google method
  onClickLoginGoogle(){
    this.authService.loginGoogle()
    .then((res) =>{
      this.router.navigate(['/members']);
    }).catch((err) => {
      //console.log(err);
      this.flashMessage.show(err.message, 
      {cssClass: 'alert-danger', timout: 10000});
    });
  }

  // Login facebook method
  onClickLoginFacebook(){
    this.authService.loginFacebook()
    .then((res) =>{
      this.router.navigate(['/members']);
    }).catch((err) => {
      //console.log(err);
      this.flashMessage.show(err.message, 
      {cssClass: 'alert-danger', timout: 10000});
    });
  }

  // Login twitter method
  onClickLoginTwitter(){
    this.authService.loginTwitter()
    .then((res) =>{
      this.router.navigate(['/members']);
    }).catch((err) => {
      //console.log(err);
      this.flashMessage.show(err.message, 
      {cssClass: 'alert-danger', timout: 10000});
    });
  }

}
