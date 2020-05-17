import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  signUpForm:FormGroup;
  Images = ["../../../assets/images/auth.svg", "../../../assets/images/data.svg","../../../assets/images/print.svg"];
  hobbies = new FormControl();
  hobbyList: string[] = ['Dance', 'Music', 'Reading', 'Sports', 'Cooking', 'Movies'];

  interests = new FormControl();
  interestList: string[] =["Java", "Python", "JavaScript", "Django","GoLang"]
  duration: any[] = [
    {id: 0, value: 'Full-time'},
    {id: 1, value: 'Part-time'},
    {id: 2, value: 'Internship'}
  ];
  fileToUpload: File = null;
  url: string="../../../assets/images/print.svg";


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildLoginForm();
    this.buildSignUpFrom();
  }
  // geerates formGroup, assign to login form of type formGroup
  buildLoginForm(email?:string){
    this.loginForm = this.formBuilder.group({
      email:[email, Validators.required],
      password:['', Validators.required],
    })
  }
  buildSignUpFrom(){
    this.signUpForm = this.formBuilder.group({

    })
  }
  submitForm(){
    console.log(this.loginForm.value)
  }
 get email(){
    return this.loginForm.get('email');
 }
 get password() {
  return this.loginForm.get('password');
 }

 editForm() {
    this.buildLoginForm('email')
 }

 handleFileInput(file: FileList) {
  this.fileToUpload = file.item(0);
  // Show image preview
  var reader = new FileReader();
  reader.onload = (event:any) => {
    this.url = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);
}
}
