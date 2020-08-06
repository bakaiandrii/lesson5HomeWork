import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataTransferService} from '../../service/data-transfer.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  form: FormGroup;

  // email: FormControl = new FormControl('');

  constructor(private formBuilder: FormBuilder,
              private dataTransferService: DataTransferService) {
    this.form = new FormGroup({
        login: new FormControl('', [Validators.required,]),
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
      }, [this.passValidator.bind(this), this.loginValidatot.bind(this)]
    );
    // this.form = formBuilder.group({
    //   email: ['', [Validators.email, Validators.required]],
    //   password: '',
    // });
  }




  passValidator(form: FormGroup): null | object {
    const {value: password} = form.controls.password;
    const {value: confirmPassword} = form.controls.confirmPassword;
    return password.toLowerCase() === confirmPassword.toLowerCase() ? null : {passwordError: true};
  }
  loginValidatot(form: FormGroup): object{
    const {value: login} = form.controls.login;
    if ( login.length < 5 ){
      return {loginErrorMin5: true};
    } else if ( login.length >= 10 ){
      return {loginErrorMax10: true};
    }
  }

  save(form: FormGroup): void {
    this.dataTransferService.changeState({name: form.controls.login.value});
    console.log(this.dataTransferService.getState());
  }
}
