import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { MainComponent } from "./components/main/main.component";
import { usersReducer } from "./redux/users.reducer";
import { UsersFeatureKey } from "./redux/users.state";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
    declarations: [
        MainComponent
    ], 
    imports: [
        CommonModule,
        UsersRoutingModule, 
        StoreModule.forFeature(UsersFeatureKey, usersReducer)
    ], 
    exports: [
    ]
})
export class UsersModule {

}