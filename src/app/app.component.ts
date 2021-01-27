import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { reactiv } from './reactive.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr:reactiv[]=[]
  reactiveForm=new FormGroup({
     'Question':new FormControl('',Validators.required),
     'Answer':new FormControl('',Validators.required)
   });
   onSubmit(){
      this.arr.push(this.reactiveForm.value)
   }

}
