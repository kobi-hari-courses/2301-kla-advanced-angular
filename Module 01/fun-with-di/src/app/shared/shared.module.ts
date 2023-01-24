import { NgModule } from "@angular/core";
import { FOO_BAR_TOKEN } from "../constants/tokens";

@NgModule({
    providers: [
        {
            provide: FOO_BAR_TOKEN, 
            useFactory: () => 200, 
            multi: true
        }
    ]
})
export class SharedModule {

}