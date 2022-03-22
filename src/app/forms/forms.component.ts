import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myname = new FormControl();
  email = new FormControl();
  text = new FormControl();

  testtitle = ''

  backvalue = ''

  typing(val:any){
   this.backvalue = val;
  }

  getdata(){
    console.log(
    this.myname.value,
    this.email.value,
    this.text.value  
    )
  }

  ContactForm = new FormGroup({
    name:new FormControl('შევსობილი ინფო',[Validators.required] ),
    email: new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required]),
    confirm_pass: new FormControl('', [Validators.required])
  })

  get name(){
    return this.ContactForm.get('name')
  }

  getalldata(){
    console.log(this.ContactForm.value)
  }

}
