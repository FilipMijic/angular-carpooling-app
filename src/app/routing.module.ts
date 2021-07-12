import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { VoznjeComponent } from './voznje/voznje.component';
import { ProfilComponent } from './profil/profil.component';
import { IzmeniProfilComponent } from './profil/izmeni-profil/izmeni-profil.component';
import { KreirajVoznjuComponent } from './voznje/kreiraj-voznju/kreiraj-voznju.component';
import { IzmeniVoznjuComponent } from './voznje/izmeni-voznju/izmeni-voznju.component';
import { MojeVoznjeComponent } from './voznje/moje-voznje/moje-voznje.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { TraziVoznjuComponent } from './voznje/trazi-voznju/trazi-voznju.component';
import { PogledajVoznjuComponent } from './voznje/pogledaj-voznju/pogledaj-voznju.component';
import { ZakazaneVoznjeComponent } from './voznje/zakazane-voznje/zakazane-voznje.component';

const rute: Routes = [
{path : '', component: WelcomeComponent},
{path : 'signup', component: SignupComponent },
{path : 'login', component: LoginComponent},
{path : 'voznje', component: VoznjeComponent},
{path : 'profil', component: ProfilComponent},
{path : 'izmeni-profil', component: IzmeniProfilComponent},
{path : 'kreiraj-voznju', component: KreirajVoznjuComponent},
{path : 'izmeni-voznju', component: IzmeniVoznjuComponent},
{path : 'moje-voznje', component: MojeVoznjeComponent},
{path : 'obavestenja', component: ObavestenjaComponent},
{path : 'trazi-voznju', component: TraziVoznjuComponent},
{path : 'pogledaj-voznju', component: PogledajVoznjuComponent},
{path : 'zakazane-voznje', component: ZakazaneVoznjeComponent}
];

@NgModule ({
imports: [RouterModule.forRoot(rute)],
exports: [RouterModule]
})
export class RoutingModule {}