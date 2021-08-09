import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ESexo } from 'src/app/Enums/ESexo.enum';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-cadastra-usuario',
  templateUrl: './cadastra-usuario.component.html',
  styleUrls: ['./cadastra-usuario.component.css']
})
export class CadastraUsuarioComponent extends BaseComponent implements OnInit {

  formularioCadastrao = new FormGroup({});
  usuario!: Usuario;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    protected toastr: ToastrService,
    protected router: Router) { super(toastr, router) }

  ngOnInit() {
    this.formularioCadastrao = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      sexo: ['1', Validators.required],
      dataNascimento: ['', Validators.required]
    });
  }

  criaUsuario() {
    this.usuario = Object.assign({}, this.usuario, this.formularioCadastrao.value);
    this.formularioCadastrao.get('sexo')?.value === '1' ? this.usuario.sexo = ESexo.Masculino : this.usuario.sexo = ESexo.Feminimo;
    this.usuarioService.post(this.usuario).subscribe(() => {
      this.processaSucesso('Usuário criado com sucesso', '/'),
        (falha: HttpErrorResponse) => this.processaFalha(falha);
    });
  }

}
