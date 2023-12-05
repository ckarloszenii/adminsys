// Modulos Angular
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Componentes
import { AppComponent } from './app.component';
// Rutas
import { APP_ROUTING } from './app.routes';
// Servicios
import { InfociaGlobalService } from './services/infocia.service';
import { VerifySessionService } from './services/verify-session';
import { LoginLayoutComponent } from './_architect/Layout/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { IntlModule } from '@progress/kendo-angular-intl';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es-MX';
import '@progress/kendo-angular-intl/locales/es-MX/all';
import { InfoSihComponent } from './components/info-sih/info-sih.component';
import { ArchitectModule } from './_architect/architect.module';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
// import { BarcodesModule } from '@progress/kendo-angular-barcodes';
// import { QRCodeModule } from 'angularx-qrcode';



registerLocaleData(localeFr)

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LoginLayoutComponent,
        InfoSihComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        APP_ROUTING,
        HttpClientModule,
        HttpClientJsonpModule,
        IntlModule,
        ArchitectModule,
        SchedulerModule,
        // QRCodeModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        // {
        //     provide: MessageService, useClass: MyMessageService
        // },
        {
            provide: LOCALE_ID,
            useValue: 'es-MX'
        },
        VerifySessionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
