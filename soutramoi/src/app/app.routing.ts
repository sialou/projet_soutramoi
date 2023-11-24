import { Routes } from "@angular/router";

import { SigninComponent } from "./components/signin/signin.component";
import { HomeComponent } from "./components/home/home.component";
import { SignupClientComponent } from "./components/signup-client/signup-client.component";
import { SignupPrestataireComponent } from "./components/signup-prestataire/signup-prestataire.component";
import { AbonnementComponent } from "./components/abonnement/abonnement.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FaqComponent } from "./components/faq/faq.component";
import { NousComponent } from "./components/nous/nous.component";
import { PayementComponent } from "./components/payement/payement.component";
import { PrestataireDetailComponent } from "./components/prestataire-detail/prestataire-detail.component";
import { ServiceDetailComponent } from "./components/service-detail/service-detail.component";
import { ServiceComponent } from "./components/service/service.component";
import { ProposComponent } from "./components/propos/propos.component";
import { AbonnementPayementComponent } from "./components/abonnement-payement/abonnement-payement.component";

export const ROUTES : Routes = [
  {

    path:'',
    component:HomeComponent,
    pathMatch: 'full'

  },

  {

    path:'signin',
    component:SigninComponent,
    pathMatch: 'full'

  },

   {

    path:'signupClient',
    component:SignupClientComponent,
    pathMatch: 'full'
   },

   {

    path:'signupPrestataire',
    component:SignupPrestataireComponent,
    pathMatch: 'full'

  },

   {

    path:'abonnement',
    component:AbonnementComponent,
    pathMatch: 'full'

  },

   {

    path:'contact',
    component:ContactComponent,
    pathMatch: 'full'

  },

   {

    path:'faq',
    component:FaqComponent,
    pathMatch: 'full'

  },

   {

    path:'home',
    component:HomeComponent,
    pathMatch: 'full'

  },

   {

    path:'nous',
    component:NousComponent,
    pathMatch: 'full'

  },

   {

    path:'payement',
    component:PayementComponent,
    pathMatch: 'full'

  },

   {

    path:'prestataire-detail',
    component:PrestataireDetailComponent,
    pathMatch: 'full'

  },

   {

    path:'service-details',
    component:ServiceDetailComponent,
    pathMatch: 'full'

  },
  {

   path:'service',
   component:ServiceComponent,
   pathMatch: 'full'

 },
 {

  path:'propos',
  component:ProposComponent ,
  pathMatch: 'full'

},
{

 path:'paiement-abonnement',
 component:AbonnementPayementComponent ,
 pathMatch: 'full'

}





]
