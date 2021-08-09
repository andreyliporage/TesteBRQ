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

    protected processaFalha(falha: HttpErrorResponse) {
        if (falha.status === 400) {
            let keys = Object.keys(falha.error.errors);
            keys.forEach(key => {
                falha.error.errors[key].forEach((mensagem: string) => {
                    this.toastr.error(mensagem, 'Erro')
                });
            });

        } else if (falha.status === 0) {
            this.toastr.error(falha.error?.title);
        } else {
            this.toastr.error(falha.error.errors[0].message, 'Erro')
        }
    }

}
