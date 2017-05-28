import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { AppComponent }  from "./app.component";
import { Card }          from "./card.component";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, Card ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
