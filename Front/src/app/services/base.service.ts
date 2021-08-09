import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  protected retornaReposta(resposta: any) {
    return resposta;
  }

  protected servicoErro(resposta: Response | any) {
    let error: string[] = [];

    if (resposta instanceof HttpErrorResponse) {
      if (resposta.status === 0) {
        error.push("Erro de conexão. Tente novamente");
        resposta.error.erros = error;
      }

      if (resposta.status === 400) {
        error.push(resposta.message);
        resposta.error.erros = error;
      }
    }

    return throwError(resposta);
  }

}
