import { InjectionToken, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { environment } from "src/environments/environment";


export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class  AppConfig {
    apiEndPoint!: String;
}


export const APP_DI_CONFIG: AppConfig = {
    apiEndPoint: environment.apiEndpoint
} 


@NgModule({

    declarations: [

    ],


    imports: [
        CommonModule
    ],


    providers: [{
        provide: APP_CONFIG,
        useValue: APP_DI_CONFIG
    }]
})

export class AppConfigModule{}