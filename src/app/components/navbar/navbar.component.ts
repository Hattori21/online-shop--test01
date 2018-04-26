import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
	public userName: string;
	public userEmail: string;
  public userAvatar: string;
  public userID: string;

  constructor(
  	public authService: AuthService,
  	public router: Router
  ) { }

  ngOnInit() {
    this.onCheckoutUserLogged();
  }

  onCheckoutUserLogged(){
    this.authService.getAuth().subscribe( auth =>{
      if(auth){
        this.isLogin = true;
        this.userName = auth.displayName;
        this.userEmail = auth.email;
        this.userAvatar = auth.photoURL;
        this.userID = auth.uid;
      }else{
        this.isLogin = false;
      }
    })
  }

  onClickLogout(){
  	this.authService.logOut();
  }

}
