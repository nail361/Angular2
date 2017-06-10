import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { AppComponent } from './components/app.component';
import { ChartsModule } from 'ng2-charts';
import { LinegraphComponent } from './components/linegraph.component';
import { BargraphComponent } from './components/bargraph.component';
import { CirclegraphComponent } from './components/circlegraph.component';


@NgModule({
  declarations: [
      AppComponent,
      LinegraphComponent,
      BargraphComponent,
      CirclegraphComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      ChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
