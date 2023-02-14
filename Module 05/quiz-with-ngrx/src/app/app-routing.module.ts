import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'quiz', loadChildren: () => import('./quiz/quiz.module').then(mod => mod.QuizModule)},
    { path: 'users', loadChildren: () => import('./users/users.module').then(mod => mod.UsersModule)},
    { path: '**', component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {

}