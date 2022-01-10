import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AdminRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [BrowserModule, AdminRoutingModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HeaderComponent, MainLayoutComponent, HomePageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
