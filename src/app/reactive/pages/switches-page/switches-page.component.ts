import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent {

  public myForm : FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotification: [true,Validators.required],
    termsAndCond: [false, Validators.requiredTrue]
  })

  constructor( private fb:FormBuilder){}

  onSave(){
    if (this.myForm.invalid){
      console.log("invalido")
      this.myForm.markAllAsTouched()
      return
    }
    console.log(this.myForm.value)
  }

  isValidField( field: string): boolean | null {
    return this.myForm.controls[field].errors &&
    this.myForm.controls[field].touched;
  }

}
