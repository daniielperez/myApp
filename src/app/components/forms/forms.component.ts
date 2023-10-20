import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  standalone:true,
  imports:[ReactiveFormsModule],
})
export class FormsComponent implements OnInit{
  public form!: FormGroup
  name = new FormControl({value:'nada',disabled:true},[Validators.required]);
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      adress: this.fb.control({value:'', disabled:true},[Validators.required]),
      apellido: [{value:'', disabled:false},[Validators.required]],
      name: new FormControl(
        {value:'this.hero.name',disabled:true}, [
        Validators.required,
        Validators.minLength(4),
      ]),
      // groupArray: this.fb.array([
      //   this.fb.group({
      //     apellido: [{value:'', disabled:false},[Validators.required]],
      //   })
      // ]),
      // groupControl: this.fb.array([
      //   this.fb.control([{value:'', disabled:false},[Validators.required]]),
      // ])
  })
  console.log(this.form.controls);
  
  }



}
