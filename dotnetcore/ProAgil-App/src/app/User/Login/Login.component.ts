import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {

  titulo = 'Login';
  model: any = {};

  constructor(
    private authService: AuthService,
    public router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.router.navigate(['dashboard']);
    }
  }

  login() {
    this.authService.login(this.model)
      .subscribe(
        () => {
          this.router.navigate(['dashboard']);
          this.toastr.success('Bem vindo!');
        },
        error => {
          this.toastr.error('Falha ao tentar entrar!');
        }
      );
  }

}
