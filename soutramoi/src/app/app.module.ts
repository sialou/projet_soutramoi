import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { PayementComponent } from './components/payement/payement.component';
import { NousComponent } from './components/nous/nous.component';
import { PrestataireDetailComponent } from './components/prestataire-detail/prestataire-detail.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupPrestataireComponent } from './components/signup-prestataire/signup-prestataire.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { RouterModule } from '@angular/router';
import{ROUTES} from './app.routing';
import {HttpClientModule} from '@angular/common/http';

//import { AbonnementPayementComponent } from './components/abonnement-payement/abonnement-payement.component';
import { ServiceComponent } from './components/service/service.component';
import { ProposComponent } from './components/propos/propos.component';
import { AbonnementPayementComponent } from './components/abonnement-payement/abonnement-payement.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    AbonnementComponent,
    PayementComponent,
    NousComponent,
    PrestataireDetailComponent,
    ServiceDetailComponent,
    ContactComponent,
    SigninComponent,
    SignupPrestataireComponent,

    SignupClientComponent,
   // AbonnementPayementComponent,
    ServiceComponent,
    ProposComponent,
    AbonnementPayementComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
