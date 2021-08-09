import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Models/Usuario';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseService {

  constructor(private http: HttpClient) { super() }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.apiUrl}usuarios`)
      .pipe(map(this.retornaReposta), catchError(this.servicoErro));
  }

  getUsuario(idUsuario: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.apiUrl}usuarios/${idUsuario}`)
      .pipe(map(this.retornaReposta), catchError(this.servicoErro));
  }

  post(usuario: Usuario) {
    return this.http.post(`${environment.apiUrl}usuarios`, usuario)
      .pipe(map(this.retornaReposta), catchError(this.servicoErro));
  }

  put(usuario: Usuario) {
    return this.http.put(`${environment.apiUrl}usuarios/${usuario.id}`, usuario)
      .pipe(map(this.retornaReposta), catchError(this.servicoErro));
  }

  delete(idUsuario: number) {
    return this.http.delete(`${environment.apiUrl}usuarios/${idUsuario}`)
      .pipe(map(this.retornaReposta), catchError(this.servicoErro));
  }

}
