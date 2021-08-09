import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ESexo } from 'src/app/Enums/ESexo.enum';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioResolve } from 'src/app/services/usuario.resolve';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-edita-usuario',
  templateUrl: './edita-usuario.component.html',
  styleUrls: ['./edita-usuario.component.css'],
  providers: [DatePipe]
})
export class EditaUsuarioComponent extends BaseComponent implements OnInit {

  formularioCadastrao = new FormGroup({});
  usuario: Usuario;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    protected toastr: ToastrService,
    protected router: Router,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe) {
    super(toastr, router);
    this.usuario = this.activatedRoute.snapshot.data['usuario'];
  }

  ngOnInit() {
    this.formularioCadastrao = this.formBuilder.group({
      nome: [this.usuario.nome, Validators.required],
      cpf: [this.usuario.cpf, Validators.required],
      email: [this.usuario.email, [Validators.required, Validators.email]],
      telefone: [this.usuario.telefone, Validators.required],
      sexo: [this.usuario.sexo.valueOf().toString(), Validators.required],
      dataNascimento: [this.datePipe.transform(this.usuario.dataNascimento, 'yyyy-MM-dd'), Validators.required]
    });
  }

  editaUsuario() {
    this.usuario = Object.assign({}, this.usuario, this.formularioCadastrao.value);
    this.formularioCadastrao.get('sexo')?.value === '1' ? this.usuario.sexo = ESexo.Masculino : this.usuario.sexo = ESexo.Feminimo;
    this.usuarioService.put(this.usuario).subscribe(() => {
      this.processaSucesso('Usuário editado com sucesso', '/'),
        (falha: HttpErrorResponse) => this.processaFalha(falha);
    });
  }

}
