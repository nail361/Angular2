import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/css/app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit, OnDestroy {

    constructor(private httpService: HttpService){}

    interval:any;
    //data:string;

    ngOnInit() {
        this.interval = setInterval(() => {
            this.GetData();
        }, 1000);
    }

    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    GetData(){
        console.log("Getting Data");
        //this.httpService.getData().subscribe((data: Response) => this.data = data.json());
    }

}
