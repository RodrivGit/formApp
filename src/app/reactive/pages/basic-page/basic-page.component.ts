import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const RTX2090 ={
  name: 'RTX2090',
  price: 2000,
  inStorage: 15
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})


export class BasicPageComponent implements OnInit{



public myForm: FormGroup = this.fb.group({
  name:['',[Validators.required, Validators.minLength(3)]],
  price: [0,[Validators.required,Validators.min(1)]],
  inStorage: [0,[Validators.required,Validators.min(1)]]
})

  constructor(private fb : FormBuilder){}
  ngOnInit(): void {
    // this.myForm.reset(RTX2090)
  }

  isValidField(field : string): boolean | null{
    return this.myForm.controls[field].errors
     && this.myForm.controls[field].touched
  }

  onSave():void{
    if(this.myForm.invalid) return
    console.log(this.myForm.value)
  }

}
