import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  isLogged = false;
  isLoginFailed = false;
  loginUsuario! : Login;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errorMsg!: string;


  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFailed = false;
      this.roles = this.tokenService.getAuthorities();
  }
}

onLogin(): void {
  this.loginUsuario = new Login(this.nombreUsuario, this.password); 
  this.authService.login(this.loginUsuario).subscribe(data => {
    this.isLogged = true;
    this.isLoginFailed = false;
    this.tokenService.setToken(data.token);
    this.tokenService.setUserName(data.nombreUsuario);
    this.tokenService.setAuthorities(data.authorities);
    this.roles = data.authorities;
    this.router.navigate(['']);
    
  }, err =>{
    
    this.isLogged = false;
    this.isLoginFailed = true;
    this.errorMsg = err.error.message;

  })
}

}