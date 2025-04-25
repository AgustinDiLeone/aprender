import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlertaComponent } from 'src/app/Componentes/alerta/alerta.component';
import { AlertaService } from 'src/app/services/alerta.service';
import { AuthService } from 'src/app/services/auth.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { UtilService } from 'src/app/services/util';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  private fb = inject(FormBuilder);
  private authServise = inject(AuthService);
  form!: FormGroup;
  private util = inject(UtilService);
  private spinner = inject(SpinnerService);
  private alerta = inject(AlertaService);

  ngOnInit() {
    // Inicializar el formulario
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  async login() {
    if (this.form.valid) {
      const { email, password } = this.form.value;

      try {
        const authResponse = await this.authServise.logIn({ email, password });
        if (authResponse.error) throw authResponse.error;
        this.spinner.mostrar();
        this.form.reset();
        this.util.routerLink('/home');
      } catch (error) {
        console.log(error);
        this.alerta.mostrar('Correo y/o contraseña incorrectos', 'error');
      }
    } else {
      const emailErrors = this.form.get('email')?.errors;
      const passwordErrors = this.form.get('password')?.errors;

      if (emailErrors) {
        if (emailErrors['required']) {
          this.alerta.mostrar('El correo es obligatorio', 'error');
        }
        if (emailErrors['email']) {
          this.alerta.mostrar('El correo no tiene un formato válido', 'error');
        }
      }

      if (passwordErrors) {
        if (passwordErrors['required']) {
          this.alerta.mostrar('La contraseña es obligatoria', 'error');
        }
        if (passwordErrors['minlength']) {
          this.alerta.mostrar(
            'La contraseña debe tener al menos 6 caracteres',
            'error'
          );
        }
      }
      console.error('Formulario inválido');
    }
  }
  // Métodos para usuarios predefinidos
  ingresarAdmin() {
    this.form.patchValue({
      email: 'admin@admin.com',
      password: '111111',
    });
  }

  ingresarProp() {
    this.form.patchValue({
      email: 'invitado@invitado.com',
      password: '222222',
    });
  }

  ingresarUser() {
    this.form.patchValue({
      email: 'usuario@usuario.com',
      password: '333333',
    });
  }
}
