import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-base',
    template: ''
})
export class BaseComponent {

    constructor(protected toastr: ToastrService, protected router: Router) { }

    protected processaSucesso(mensagemSucesso: string, rotaRedirecionamento?: string) {
        if (rotaRedirecionamento !== undefined) {
            this.router.navigate([rotaRedirecionamento]);
        }

        this.toastr.success(mensagemSucesso, 'Sucesso');
    }

    protected processaFalha(falha: HttpErrorResponse, mensagemErro?: string) {
        if (mensagemErro !== undefined) {
            this.toastr.error(mensagemErro, 'Errp');
            return;
        }

        if (falha.status === 0) {
            this.toastr.error('Falha de conexão', 'Erro');
        }
        else if (falha.status === 400) {
            this.toastr.error(falha.error, 'Erro');
        }
    }

}
