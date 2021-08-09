import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraUsuarioComponent } from './pages/cadastra-usuario/cadastra-usuario.component';
import { EditaUsuarioComponent } from './pages/edita-usuario/edita-usuario.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { UsuarioResolve } from './services/usuario.resolve';

const routes: Routes = [
  { path: '', component: ListaUsuariosComponent },
  { path: 'cadastro', component: CadastraUsuarioComponent },
  { path: 'edita/:id', component: EditaUsuarioComponent, resolve: { usuario: UsuarioResolve } },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
