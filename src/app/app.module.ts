import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VoznjeComponent } from './voznje/voznje.component';
import { ProfilComponent } from './profil/profil.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { VoznjaService } from './voznje/voznja.service';
import { IzmeniProfilComponent } from './profil/izmeni-profil/izmeni-profil.component';
import { IzmeniVoznjuComponent } from './voznje/izmeni-voznju/izmeni-voznju.component';
import { KreirajVoznjuComponent } from './voznje/kreiraj-voznju/kreiraj-voznju.component';
import { MojeVoznjeComponent } from './voznje/moje-voznje/moje-voznje.component';
import { ObrisiVoznjuComponent } from './voznje/moje-voznje/obrisi-voznju/obrisi-voznju.component';
import { OceniVoznjuComponent } from './voznje/oceni-voznju/oceni-voznju.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { KomentarisiVoznjuComponent } from './voznje/komentarisi-voznju/komentarisi-voznju.component';
import { TraziVoznjuComponent } from './voznje/trazi-voznju/trazi-voznju.component';
import { PogledajVoznjuComponent } from './voznje/pogledaj-voznju/pogledaj-voznju.component';
import { ZakazaneVoznjeComponent } from './voznje/zakazane-voznje/zakazane-voznje.component';
import { OtkaziVoznjuComponent } from './voznje/zakazane-voznje/otkazi-voznju/otkazi-voznju.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    VoznjeComponent,
    ProfilComponent,
    IzmeniProfilComponent,
    KreirajVoznjuComponent,
    IzmeniVoznjuComponent,
    MojeVoznjeComponent,
    ObrisiVoznjuComponent,
    OceniVoznjuComponent,
    ObavestenjaComponent,
    KomentarisiVoznjuComponent,
    TraziVoznjuComponent,
    PogledajVoznjuComponent,
    ZakazaneVoznjeComponent,
    OtkaziVoznjuComponent
  ],
  imports: [
    BrowserModule, MaterialModule, RoutingModule, BrowserAnimationsModule, FlexLayoutModule, FormsModule
  ],
  providers: [VoznjaService],
  bootstrap: [AppComponent],
  entryComponents: [ObrisiVoznjuComponent, OceniVoznjuComponent, KomentarisiVoznjuComponent, OtkaziVoznjuComponent]
})
export class AppModule { }
