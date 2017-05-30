import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: '../templates/form.component.html',
  styleUrls: ['../styles/css/form.component.css']
})
export class FormComponent {

    onSubmit(form: NgForm){
          console.log(form);
    }

}
