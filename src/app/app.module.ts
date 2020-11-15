import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { ScatlingComponent } from './scatling/scatling.component';
import { MainComponent } from './main/main.component';
import { TimberComponent } from './timber/timber.component';
import { MatTabsModule, MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import { ScantlingOtherComponent } from './scantling-other/scantling-other.component';

@NgModule({
  declarations: [
    AppComponent,
    ScatlingComponent,
    MainComponent,
    TimberComponent,
    ScantlingOtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
