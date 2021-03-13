import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form-tests',
  templateUrl: './reactive-form-tests.component.html',
  styleUrls: ['./reactive-form-tests.component.scss']
})
export class ReactiveFormTestsComponent implements OnInit {
  genders = ['male', 'female'];
  singUpFrom:FormGroup;

  ngOnInit(): void {
      this.singUpFrom = new FormGroup({
        'username': new FormControl(null),
        'email':new FormControl(null),
        'gender':new FormControl('male')
      })
  }

  onSubmit(){
    console.log('my form', this.singUpFrom.value)
  }

}
