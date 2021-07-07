import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [ //um array de rotas para toda a minha aplicação

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],//forRoot é para privar as rotas só para essa funcionalidade
    exports: [RouterModule]
})

export class AppRoutingModule {}
