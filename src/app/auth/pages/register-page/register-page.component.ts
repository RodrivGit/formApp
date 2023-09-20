import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidatorService } from 'src/app/shared/service/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.pattern(this.valida.firstNameAndLastnamePattern)]],
    // email: ['',[Validators.required, Validators.pattern(this.valida.emailPattern)] ,[EmailValidatorService]],
    email: ['',[Validators.required, Validators.pattern(this.valida.emailPattern)] ,[this.validService.validate]],
    username: ['',[Validators.required,this.valida.CantBeStrider]],
    password: ['',[Validators.required]],
    password2: ['',[Validators.required]],
  },{
    validators: [
      this.valida.isFieldOneEqualFieldTwo('password','password2')
    ]
  })

  constructor(
    private fb: FormBuilder, 
    private valida:ValidatorService,
    private validService:EmailValidatorService
    ){}

  isValidField(field : string){
    //Obtener validacion desde un servicio
    return this.valida.isValidField(field,this.myForm)
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
