import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/pages/home/home.component";

const moduleRoutes: Routes = [
    {
        path: "",
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(moduleRoutes)],
    providers: [RouterModule]
})

export class ModulesRoutingModule {}