import { Component, Input, OnInit } from '@angular/core';
import { reactiv } from '../reactive.model';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  @Input() child:reactiv;
  @Input () index:number;
 bool:boolean=false;
 bool1:boolean;
 bool2:boolean;
 delete(indexx:number){
  this.child[this.index].splice(indexx,1); 
 }
//  statusClass='non-active'
//  statusClasss='active'
  constructor() { }
onClick(){
  this.bool=!this.bool;
}
// calculate(){
//   this.bool1=!this.bool1;
// }
setActiveClasss(){
 this.bool1=false;

  }
setActiveClass(){
  this.bool1=true
}
  ngOnInit(): void {
  }

}
