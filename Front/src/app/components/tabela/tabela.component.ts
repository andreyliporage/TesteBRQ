import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/Models/Usuario';
import { BaseComponent } from 'src/app/pages/base.component';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent extends BaseComponent {

  constructor(private usuarioService: UsuarioService,
    protected toastr: ToastrService,
    protected router: Router) { super(toastr, router) }

  @Input() usuarios: Usuario[] = [];

  deletaUsuario(idUsuario: number) {
    let alert = confirm('Deseja deletar esse usuário?');

    if (alert) {
      this.usuarioService.delete(idUsuario).subscribe(() => {
        let toastr = this.toastr.success('Usuário excluído com sucesso', 'Sucesso');

        if (toastr) {
          toastr.onHidden.subscribe(
            () => document.defaultView?.location.reload()
          );
        }
      },
        (falha: HttpErrorResponse) => this.processaFalha(falha));
    }
  }
}
