import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm,  Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usernameFormControl = new FormControl('',
   [
    Validators.required
  ]);

  passwordFormControl = new FormControl('',
   [
    Validators.required
  ]);

  ageFormControl = new FormControl('',
   [
    Validators.required,
    Validators.pattern("^[1-9][0-9]?$|^100$"),
  ]);

  matcher = new MyErrorStateMatcher();

  Roles: any = ['Admin', 'Author', 'Reader'];
  selected: any;
  constructor() { }

  ngOnInit(): void {
  }

}
