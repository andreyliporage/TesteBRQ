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
      if (resposta.statusText === 'Unknown Error') {
        error.push("Ocorreu um erro desconhecido");
        resposta.error.errors = error;
      }

      if (resposta.status === 400) {
        error.push(resposta.message);
      }
    }

    return throwError(resposta);
  }

}
