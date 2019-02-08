import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { StoreService } from './api/store.service';
import { IonicStorageModule} from '@ionic/storage';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';

import { Platform } from '@ionic/angular';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    SMS,
    BrowserTab,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StoreService
  ],
  bootstrap: [AppComponent ]
})
export class AppModule {
  
  }