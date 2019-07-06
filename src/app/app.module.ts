import{RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//servicio
import{EquipoService} from './equipo.service';
import { UserService } from './services/user.service';
//API
import { HttpClientModule} from '@angular/common/http';

//modulo para formularios
import{ FormsModule } from '@angular/forms';
//font-awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NotfountComponent } from './notfount/notfount.component';
import { EquipoComponent } from './equipo/equipo.component';


//firebase import       https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md   link de documentacion para instalar
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
//servicio de conexion
import{ConexionService}from './services/conexion.service';
import { ListaComponent } from './components/lista/lista.component';
import { ListaAddComponent } from './components/lista-add/lista-add.component';
import { ApiUsersComponent } from './components/api-users/api-users.component';
import { PersonaClaseComponent } from './persona-clase/persona-clase.component';
import { FormComponent } from './form/form.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { TestApiComponent } from './test-api/test-api.component';





//contaste de rutas
const routes:Routes= [
  {
    path: '', component:TestApiComponent, pathMatch:'full'
  },
  {
    path: 'inicio', component:InicioComponent
  },
  {
    path: 'nosotros', component:NosotrosComponent
  },
  {
    path: 'contacto', component:ContactoComponent
  },
  {
    path: 'equipo/:id', component:EquipoComponent
  },
  {
    path: 'api', component:ApiUsersComponent
  },
  {
    path: 'callback?code', component:ApiUsersComponent
  },
  {
    path: 'practica', component:HeaderComponent
  },
  {
    path: '**', component:NotfountComponent
  }
 
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EncabezadoComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    NotfountComponent,
    EquipoComponent,
    ListaComponent,
    ListaAddComponent,
    ApiUsersComponent,
    PersonaClaseComponent,
    FormComponent,
    CalculatorComponent,
    ResultadoComponent,
    TestApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), //importacion de la clase para rutas
    AngularFireModule.initializeApp(environment.firebase),//import para firebase
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    EquipoService,
    ConexionService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
