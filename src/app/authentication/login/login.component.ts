import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';

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

  interests: any [] = [
    {id:1, name:"Java", title:"java"},
    {id:2, name:"Python", title:"python"},
    {id:3, name:"JavaScript" , title:"javaScript"},
    {id:3, name:"Django" , title:"django"},
    {id:3, name:"GoLang" , title:"goLang"}
  ];




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
    this.buildSignUpForm();
  }
  // geerates formGroup, assign to login form of type formGroup
  buildLoginForm(email?:string){
    this.loginForm = this.formBuilder.group({
      email:[email, Validators.required],
      password:['', Validators.required],
    })
  }
  buildSignUpForm(){
    this.signUpForm = this.formBuilder.group({
      password:[''],
      phoneNumber: this.formBuilder.array([this.formBuilder.control('')]),
      hobbies:[['']],
      duration:[''],
      startDate:[''],
      endDate:[''],
      interests: [['']],
      url:[''],
      rememberMe:[false]

    })
  }
  submitForm(){
    console.log(this.loginForm.value)
  }
  submitSignUpForm(){
    console.log(this.signUpForm.value)
  }

  addNewNumber(e) {
    this.phoneNumber.push(this.formBuilder.control(''));
    // i can't seem to be able to get the value of the phone number inorder to push it to an array

  }
 get email(){
    return this.loginForm.get('email');
 }
 get password() {
  return this.loginForm.get('password');
 }
 get phoneNumber() {
   return this.signUpForm.get('phoneNumber') as FormArray;
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
    this.signUpForm.value.url=event.target.result;

  }
  reader.readAsDataURL(this.fileToUpload);
}

getSelectedInterestForEdit(interest:string[]){
  const selectedBooleans= this.interests.map((v:any, i:any)=> interest.includes(this.interests[i].title)? true: false)
  return selectedBooleans
}
}
