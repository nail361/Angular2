import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app/templates/app.component.html",
    styleUrls: ["app/css/app.component.css"]
})
export class AppComponent {
    name:string = "";
    name2:string = "fgfg";
    pInfo:string = "Инфо";
    buttonTitle:string = "Жми сюда";
    cardIndex:number = 5;

    increase($event){
        alert("Проверь console)");
        console.log($event);
    }

    onSubmit(text:string){
        console.log(text);
    }
}
