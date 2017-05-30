import { Component } from '@angular/core';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/css/app.component.css'],
  providers: [LogService]
})
export class AppComponent {
    condition:boolean = true;
    title = 'app works!';
    cards:Array<number> = [1,2,3,4,5,6];

    constructor(private logService: LogService){}

    toggle(){
        this.condition = !this.condition;
        this.logService.write(this.condition.toString());
    }
}
