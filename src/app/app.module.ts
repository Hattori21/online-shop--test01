import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { MembersComponent } from './components/members/members.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailItemComponent } from './components/detail-item/detail-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { UploadComponent } from './components/upload/upload.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';

import { AuthService } from './services/auth.service';
import { ItemService } from './services/item.service';
import { ImageService } from './services/image.service';
import { UploadService } from './services/upload.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddItemComponent,
    MembersComponent,
    AboutComponent,
    NotFoundComponent,
    DetailItemComponent,
    EditItemComponent,
    LoginComponent,
    SignupComponent,
    GalleryComponent,
    ImageDetailComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FlashMessagesModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    FlashMessagesService,
    ItemService,
    ImageService,
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
