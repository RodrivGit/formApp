import { FormControl, ValidationErrors } from "@angular/forms";


export const CantBeStrider = (control: FormControl) : ValidationErrors | null => {

    const value: string = control.value.trim().toLowerCase();

    if (value === 'strider') return { noStrider: true }

    return null;

}