import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Usuario } from "../Models/Usuario";
import { UsuarioService } from "./usuario.service";

@Injectable()
export class UsuarioResolve implements Resolve<Usuario> {

    constructor(private usuarioService: UsuarioService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.usuarioService.getUsuario(route.params['id']);
    }

}