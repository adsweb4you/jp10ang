import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template:'<h1> aslkdjaskld </h1>',
  // styles:['h1{background-color:red; color:white}']
})
export class AppComponent {
  title = 6;
  colors = "green";
  img = "assets/img/764824736.jpg"


  changecolor(){
   this.colors = this.colors == "green" ? 'red' : 'green'
  }

}
