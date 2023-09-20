import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator{

    
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const email = control.value;
        const httpCallObservable = new Observable<ValidationErrors | null> (
            (subscriber) => {
                console.log(email)
                if (email === 'rod@gmail.com'){
                    console.log('No Valido')
                    subscriber.next({emailTaken: true})
                    subscriber.complete()
                    return
                }
                console.log('Valido')
                subscriber.next(null)
                subscriber.complete()
            }
        ).pipe(
            delay(2000)
        )
        
        return httpCallObservable
    }



}
//     console.log({email})

//     return of({
//         emailTakenx: true
//     }).pipe(
//         delay(2000)
//     )
// 