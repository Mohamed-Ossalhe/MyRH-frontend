import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "@modules/home/pages/home/home.component";
import { JobOffersComponent } from "@modules/home/pages/job-offers/job-offers.component";
import { AuthComponent } from "@modules/auth/pages/auth/auth.component";
import { SignupComponent } from "@modules/auth/pages/signup/signup.component";

const moduleRoutes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "",
                component: JobOffersComponent
            }
        ]
    },
    {
        path: "auth",
        component: AuthComponent,
        children: [
            {
                path: "",
                component: SignupComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(moduleRoutes)],
    providers: [RouterModule]
})

export class ModulesRoutingModule {}