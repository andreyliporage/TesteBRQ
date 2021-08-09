import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CadastraUsuarioComponent } from './pages/cadastra-usuario/cadastra-usuario.component';
import { EditaUsuarioComponent } from './pages/edita-usuario/edita-usuario.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UsuarioResolve } from './services/usuario.resolve';
import { HttpInterceptorService } from './services/http-interceptor.service';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
]

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ListaUsuariosComponent,
    CadastraUsuarioComponent,
    EditaUsuarioComponent,
    TabelaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [UsuarioResolve, httpInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
