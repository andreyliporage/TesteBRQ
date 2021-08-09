import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent extends BaseComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, protected toastr: ToastrService, protected router: Router) { super(toastr, router) }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe((result: Usuario[]) => this.usuarios = result, (falha: HttpErrorResponse) => this.processaFalha(falha));
  }

}
