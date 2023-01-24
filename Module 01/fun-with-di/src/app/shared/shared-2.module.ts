import { NgModule } from "@angular/core";
import { FOO_BAR_TOKEN } from "../constants/tokens";

@NgModule({
    providers: [
        {
            provide: FOO_BAR_TOKEN, 
            useValue: 300, 
            multi: true
        }
    ]
})
export class Shared2Module {

}