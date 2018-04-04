import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { SignupPage } from '../pages/signup/signup';
import { ContactPage } from '../pages/contact/contact';
import { MoviesPage } from '../pages/movies/movies';
import { BmoviesPage } from '../pages/bmovies/bmovies';
import { BookPage } from '../pages/book/book';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MoviesProvider } from '../providers/movies/movies';
import { LoginProvider } from '../providers/login/login';


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    ProfilePage,
    SignupPage,
    ContactPage,
    MoviesPage,
    BmoviesPage,
    BookPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp), HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    ProfilePage,
    SignupPage,
    ContactPage,
    MoviesPage,
    BmoviesPage,
    BookPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider,
    LoginProvider
  ]
})
export class AppModule {}
