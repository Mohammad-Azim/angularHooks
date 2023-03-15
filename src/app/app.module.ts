import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { MessageNotServiceService } from './services/message-not-service.service';
import { ObserServiceService } from './services/obser-service.service';

@NgModule({
  declarations: [AppComponent, ChildComponent, ParentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [MessageNotServiceService, ObserServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
