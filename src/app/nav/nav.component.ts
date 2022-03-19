import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() myimg = '';
  myclass = 'bg-light';
  myclass2 = 'text-white';
  col = 'red';
  showmenu  = true;

  menus = [
    "მთავარი",
    "ჩვენს შესახებ",
    "კონტაქტი"
  ]

  constructor() { }

  ngOnInit(): void {
    let mode = localStorage.getItem('mode');
    this.myclass = mode == 'bg-dark' ? 'bg-dark' : 'bg-light'
  }

  dark(event:any){
     if (event.target.checked) {
       this.myclass = 'bg-dark';
       localStorage.setItem('mode', 'bg-dark')
     }else{
      this.myclass = 'bg-light';
      localStorage.setItem('mode', 'bg-light' )
     }
  }

}
